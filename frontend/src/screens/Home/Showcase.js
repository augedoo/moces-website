import React from 'react';
import Carousel from 'react-elastic-carousel';
import ShowcaseSlide1 from './ShowcaseSlide1';
import ShowcaseSlide2 from './ShowcaseSlide2';

function Showcase() {
  const renderPagination = ({ pages, activePage, onClick }) => {
    return (
      <div className='rec-carousel-pagination'>
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <div
              className='rec-carousel-pagination__item'
              key={page}
              onClick={() => onClick(page)}
              active={isActivePage}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section id='showcase' className='showcase'>
      <Carousel
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={5000}
        showArrows={false}
        // renderPagination={renderPagination}
      >
        <ShowcaseSlide1 />
        <ShowcaseSlide2 />
      </Carousel>
    </section>
  );
}

export default Showcase;
