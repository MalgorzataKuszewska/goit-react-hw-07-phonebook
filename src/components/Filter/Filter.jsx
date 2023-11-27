import React from 'react';
import styles from 'components/ContactForm/ContactForm.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filter;
