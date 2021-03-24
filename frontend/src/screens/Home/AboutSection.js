import React from 'react';

const AboutSection = () => {
  return (
    <section id='about' className='about'>
      <h1 className='section-title'>About Us</h1>
      <h2 className='section-subtitle'>Our Story</h2>

      <div className='info'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab neque
          minus, at tempore ea, exercitationem suscipit recusandae quasi alias
          numquam quidem necessitatibus nisi omnis delectus veritatis cumque
          fugit ut, natus consectetur maxime deleniti a assumenda voluptatem.
          Distinctio delectus sapiente quisquam accusantium harum vero cumque ut
          quasi sed, fuga fugiat nesciunt.
        </p>
        <a href='/about' className='btn btn-secondary'>
          Read More
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
