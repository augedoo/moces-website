import React from 'react';
import ProjectsSection from './ProjectsSection';
import VolunteerSection from '../../components/VolunteerSection';
import GetInvolvedSection from './GetInvolvedSection';
import Showcase from './Showcase';

const HomeScreen = () => {
  return (
    <div className='screen-home'>
      <Showcase />
      <ProjectsSection />
      <GetInvolvedSection />

      <VolunteerSection />
    </div>
  );
};

export default HomeScreen;
