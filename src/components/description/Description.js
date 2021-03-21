import React from 'react';

import classes from './Description.styl';

const Description = ({ data, extClass }) => {

  return (
    <article className={ `${ classes["description"] } ${ extClass }` }>
      { data }
    </article>
  );
}

export default Description;
