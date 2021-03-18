import React from 'react';
import classes from './Skills.styl';

const Skills = ({ data }) => {

  const SkillCategories = data.map(({ category, items }, i) => {

    const SkillItems = items.map((item, i) => {
      return <span className={ classes["skill-item"] } key={ i }>{ item }</span>
    });

    return (
      <div className={ classes["skill-category"] } key={ i }>
        <h3>{ category }</h3>
        { SkillItems }
      </div>
    );
  });

  return (
    <div className={ classes["skills"] }>
      <header>Skills</header>
      { SkillCategories }
    </div>
  );
}

export default Skills;
