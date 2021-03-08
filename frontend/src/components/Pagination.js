import React from 'react';

const Pagination = () => {
  return (
    <div className='pagination card'>
      <button className='prev'>
        <i className='fas fa-chevron-left'></i>
      </button>
      <div className='boxes'>
        <button className='active'>1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>25</button>
      </div>

      <button className='next'>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Pagination;
