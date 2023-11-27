import React from 'react';
import styles from 'components/ContactItem/ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button
        className={styles.buttonDelete}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
