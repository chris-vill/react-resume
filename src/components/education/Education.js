import React from 'react';
import { objectMap } from '../../utils';
import classes from './Education.styl';

const Education = ({ data }) => {

  const EducationItems = data.map(({ course, physicalAddress, school, date }, i) => (
    <div className={ classes["education-item"] } key={ i }>
      <h3>{ course }</h3>
      <span>{ school }</span>
      <span>{ physicalAddress }</span>
      <span>{ date }</span>
    </div>
  ));

  return (
    <div className={ classes["education"] }>
      <header>Education</header>
      { EducationItems }
    </div>
  );
}

export default Education;
