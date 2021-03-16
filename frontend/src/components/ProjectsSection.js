import React from 'react';

const ProjectsSection = () => {
  return (
    <section className='projects'>
      <div className='container'>
        <h1 className='section-title'>Explore our projections</h1>
        <h2>Our current projections</h2>
        <div className='items'>
          <div className='item'>
            <h3>Farming with the elderly</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              mollitia harum, architecto accusantium, veniam dolores quos
              voluptatem quaerat aliquam exercitationem facilis facere, nemo
              illo velit!
            </p>
            <a href='#!'>
              Learn more
              <i className='fas fa-chevron-right'></i>
            </a>
          </div>
          <div className='item'>
            <h3>Farming with the elderly</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              mollitia harum, architecto accusantium, veniam dolores quos
              voluptatem quaerat aliquam exercitationem facilis facere, nemo
              illo velit!
            </p>
            <a href='#!'>
              Learn more
              <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </div>

        <div>
          <a href='#!' className='btn btn-large btn-primary-outlined'>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
