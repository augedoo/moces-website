import React from 'react';
import ProjectsSection from './ProjectsSection';
import VolunteerSection from '../../components/VolunteerSection';
import GetInvolvedSection from './GetInvolvedSection';
import Showcase from './Showcase';
import AboutSection from './AboutSection';
import HelpUsSection from './HelpUsSection';

const HomeScreen = () => {
  return (
    <div className='screen-home'>
      <Showcase />
      <AboutSection />
      <VolunteerSection />
      <ProjectsSection />
      <GetInvolvedSection />
      <HelpUsSection />
    </div>
  );
};

export default HomeScreen;
