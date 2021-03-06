import React from 'react';
import { Icon } from '../';
import classes from './WorkExperience.styl';

const WorkExperience = ({
  data: { jobTitle, company, physicalAddress, dateStart, dateEnd, details },
  extClass
}) => {

  const Details = details.map((d, i) => (
    <div className={ classes["detail"] } key={ i }>
      <Icon name="arrowRight" extClass={ classes["icon"] }/>
      <span>{ d }</span>
    </div>
  ))

  return (
    <article className={ `${ classes["work-experience"] } ${ extClass }` }>
      <header>
        <Icon name="star" extClass={ classes["icon"] }/>
        <h3>{ jobTitle }</h3>
      </header>
      <span className={ classes["subtitle"] }>{ company } &nbsp; <b>/</b> &nbsp; { dateStart } - { dateEnd } &nbsp; <b>/</b> &nbsp;  { physicalAddress }</span>
      <div className={ classes["details"] }>
        { Details }
      </div>
    </article>
  );
}

export default WorkExperience;
