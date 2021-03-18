import React from 'react';
import { Icon } from '../../';
import { firstLetterUpperCase } from '../../../utils';
import classes from './ContactItem.styl';

const ContactItem = ({ val, type, extClass="" }) => {

  const Content = (() => {
    if (val.includes("https://")) {
      return (
        <a className={ classes["contact-item"] } href={ val } target="_blank">
          { firstLetterUpperCase(type) }
        </a>
      );
    }

    return (
      <span className={ classes["contact-item"] }>
        { val }
      </span>
    );
  })();

  return (
    <div className={ extClass }>
      { Content }
      <Icon name={ type }/>
    </div>
  );
}

export default ContactItem;
