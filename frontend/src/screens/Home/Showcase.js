import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import ShowcaseSlide1 from './ShowcaseSlide1';
import ShowcaseSlide2 from './ShowcaseSlide2';
import ShowcaseSlide3 from './ShowcaseSlide3';

function Showcase() {
  const carouselRef = useRef();

  return (
    <section id='showcase' className='showcase'>
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={5000}
        showArrows={false}
        // onNextEnd={(currentItem, pageIndex) => carouselRef.current.goto(1)}
      >
        <ShowcaseSlide1 />
        <ShowcaseSlide2 />
        <ShowcaseSlide3 />
      </Carousel>
    </section>
  );
}

export default Showcase;
