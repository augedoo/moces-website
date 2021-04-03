const path = require('path');
const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const Member = require('../models/Member');

// @desc      Register member
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  // const { name, email, password, nationality, role } = req.body;

  // Create member
  const member = await Member.create(req.body);

  if (!member) {
    return next(new ErrorResponse('Member could not be created'));
  }

  // const message = `
  //   <div style="color: #2A2A2A; padding: 0 1rem; font-size: 1rem; text-align: center;">

  //     <p style="font-weight: 900; font-size: 2.5rem; color: #003A6A;">UGCompass</p>

  //     <p style="border-bottom: 7px solid #003A6A;">
  //       <img src="cid:universityofghana@nodemailer.com" style="width: 100%"/>
  //     </p>
  //     <h4>Hi ${member.name},</h4>
  //     <p>We’re thrilled to see you here!</p>

  //     <p>
  //       We’re confident that, UGCompass will help you utilize campus facilities effectively.
  //     </p>

  //     <p>
  //       For any help, you can contact us on: <br><br> +233-241-244-468 <br><br> Our team is always behind your dail to ensure you get the very best out of our service.
  //     </p>

  //     Thank you and we are excited to have you.

  //     <p style="padding: 1rem 0;">
  //       <strong><span style="color: #F97F21;">I-PROJECT</span> <sub>LEG</sub></strong>
  //     </p>

  //     <p style="padding: 1rem 0;">
  //       Find more about us.

  //       <br><br>

  //       <a href="https://www.iprojectleg.com/" style="display: inline-block; padding: 0.75rem 1.5rem; font-weight: bold; color: #fff; background: #003A6A; border-radius: 5px;">
  //         Visit I-Project Leg
  //       </a>
  //     </p>

  //     <p style="margin-top: 2rem;">
  //       <img src="cid:iproject-advert-1@nodemailer.com" style="width: 100%"/>
  //     </p>
  //   </div>
  //   `;
  // await sendEmail({
  //   email: member.email,
  //   subject: 'Welcome Aboard on UGCompass',
  //   message,
  //   attachments: [
  //     {
  //       filename: 'ug.jpg',
  //       path: `${path.join(__dirname, '..', 'public', 'img', 'ug.jpg')}`,
  //       cid: 'universityofghana@nodemailer.com', //same cid value as in the html img src
  //     },
  //     {
  //       filename: 'iproject-advert-1.jpg',
  //       path: `${path.join(
  //         __dirname,
  //         '..',
  //         'public',
  //         'img',
  //         'iproject-advert-1.jpg'
  //       )}`,
  //       cid: 'iproject-advert-1@nodemailer.com',
  //     },
  //   ],
  // });

  sendTokenResponse(member, 200, res);
});

// @desc      Login member
// @route     POST /api/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for member
  const member = await Member.findOne({ email }).select('+password');

  if (!member) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const doMatch = await member.matchPassword(password);
  if (!doMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(member, 200, res);
});

// @desc      Log member out / clear cookie
// @route     GET /api/auth/logout
// @access    Private
exports.logout = asyncHandler(async (req, res, next) => {
  // set cookie to none
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  // ! Clear localStorage on the client

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Get currently logged in member
// @route     GET /api/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const member = await Member.findById(req.member.id);

  res.status(200).json({
    success: true,
    data: member,
  });
});

// @desc      Update member details
// @route     PUT /api/auth/updatedetails
// @access    Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
    nationality: req.body.nationality,
    address: req.body.address,
    occupation: req.body.occupation,
    phone: req.body.phone,
  };

  const member = await Member.findByIdAndUpdate(req.member.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: member,
  });
});

// @desc      Update logged in member password
// @route     PUT /api/auth/updatepassword
// @access    Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const member = await Member.findById(req.member.id).select('+password');

  // Check current password
  if (!(await member.matchPassword(req.body.currentPassword))) {
    return next(new ErrorResponse('Password is incorrect.', 401));
  }

  member.password = req.body.newPassword;
  await member.save();

  sendTokenResponse(member, 200, res);
});

// @desc      Forgot password
// @route     GET /api/auth/forgotpassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const member = await Member.findOne({ email: req.body.email });

  if (!member) {
    return next(new ErrorResponse('No member with that email', 404));
  }

  // Get reset token
  const resetToken = member.getResetPasswordToken();

  await member.save({ validateBeforeSave: false });

  // Create reset url
  const resetUrl = `https://ugcompass.netlify.app/changepassword/${resetToken}`;

  const message = `
    <p>You are receiving this email because you <span style="color: red;">(or someone else)</span> has requested the reset of a password. Please click on this <a href="${resetUrl}">link</a> to reset your password.</p>
  `;

  try {
    await sendEmail({
      email: member.email,
      subject: 'Password Reset',
      message,
    });

    res.status(200).json({
      success: true,
      data: 'Email Sent',
    });
  } catch (err) {
    member.resetPasswordToken = undefined;
    member.resetPasswordExpire = undefined;
    await member.save({ validateBeforeSave: false });
    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// @desc      Reset Password
// @route     PUT /api/auth/resetpassword/:resettoken
// @access    Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const member = await Member.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!member) {
    return next(new ErrorResponse('Invalid token', 400));
  }

  // Set new password
  member.password = req.body.password;
  member.resetPasswordToken = undefined;
  member.resetPasswordExpire = undefined;
  await member.save();

  sendTokenResponse(member, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (member, statusCode, res) => {
  // > Create token
  const token = member.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //>  access cookie only through client side script
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true; // > this will allow the cookie to be sent with https
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({ success: true, token_type: 'bearer', token });
};
