import React from 'react';
import ProjectsSection from './ProjectsSection';
import VolunteerSection from '../../components/VolunteerSection';
import GetInvolvedSection from './GetInvolvedSection';
import Showcase from './Showcase';
import AboutSection from './AboutSection';
import HelpUsSection from './HelpUsSection';
import NewsSection from './NewsSection';

const HomeScreen = () => {
  return (
    <main className='screen-home'>
      <Showcase />
      <div id='about-news' className=' about-news'>
        <div className='container'>
          <AboutSection />
          <NewsSection />
        </div>
      </div>
      <VolunteerSection />
      <ProjectsSection />
      <GetInvolvedSection />
      <HelpUsSection />
    </main>
  );
};

export default HomeScreen;
