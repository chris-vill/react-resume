import React from 'react';
import { objectMap } from '../../utils';
import ContactItem from './contact-item/ContactItem';
import classes from './ContactInfo.styl';

const ContactInfo = ({ data }) => {

  const ContactItems = objectMap(data, (val, key, i) => (
    <ContactItem
      extClass={ classes["contact-item"] }
      val={ val }
      type={ key }
      key={ i }
    />
  ));

  return (
    <div className={ classes["contact-info"] }>
      <header>Contact Info</header>
      { ContactItems }
    </div>
  );
}

export default ContactInfo;
