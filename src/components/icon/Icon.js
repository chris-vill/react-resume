import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Icon.styl';

const Icon = ({ name, extClass }) => {

  const faMapping = {
    physicalAddress: ["fas", "map-marker-alt"],
    emailAddress: ["fas", "envelope"],
    phoneNumber: ["fas", "phone"],
    linkedIn: ["fab", "linkedin"],
    github: ["fab", "github"],
    star: ["fas", "star"],
    arrowRight: ["fas", "long-arrow-alt-right"]
  };

  return (
    <div className={ `${ classes["icon"] } ${ extClass }` }>
      <FontAwesomeIcon icon={ faMapping[name] }/>
    </div>
  );
}

export default Icon;
