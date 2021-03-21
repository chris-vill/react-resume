import React from 'react';
import { Icon } from '../';
import classes from './Project.styl';

const Project = ({
  data: { title, repository, details },
  extClass
}) => {

  const Details = details.map((d, i) => (
    <div className={ classes["detail"] } key={ i }>
      <Icon name="arrowRight" extClass={ classes["icon"] }/>
      <span>{ d }</span>
    </div>
  ))

  return (
    <article className={ classes["project"] }>
      <header>
        <Icon name="star" extClass={ classes["icon"] }/>
        <h3>{ title }</h3>
      </header>
      <a className={ classes["subtitle"] } href={ repository } target="_blank">{ repository }</a>
      <div className={ classes["details"] }>
        { Details }
      </div>
    </article>
  );
}

export default Project;
