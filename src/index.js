import React from 'react';
import ReactDom from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './main.styl';
import resumeData from '../assets/resume-data';
import { ContactInfo, Education, Skills, WorkExperience, Project, Description } from './components';

library.add(fab);
library.add(far);
library.add(fas);

const WorkExperiences = resumeData.workExperience
  .map((d, i) => <WorkExperience data={ d } key={ i }/>);

const Projects = resumeData.projects
  .map((p, i) => <Project data={ p } key={ i }/>);

ReactDom.render(
  (
    <div className="main-container">
      <header>
        <div className="header-title">
          <h1>Christopher Villaran</h1>
          <h2>Frontend Web Developer</h2>
        </div>
        <div className="stripe"></div>
      </header>
      <aside>
        <ContactInfo data={ resumeData.contactInfo }/>
        <Skills data={ resumeData.skills }/>
        <Education data={ resumeData.education }/>
      </aside>
      <section className="description">
        <Description data={ resumeData.description }/>
      </section>
      <section className="work-experiences">
        <header>Work Experience</header>
        { WorkExperiences }
      </section>
      <section className="projects">
        <header>Personal Projects</header>
        { Projects }
      </section>
    </div>
  ),
  document.getElementById("root")
);
