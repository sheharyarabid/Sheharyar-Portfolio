import React from 'react';
import styles from './pillbuttons.module.css';

const PillButtons = () => {
  return (
    <div className={styles.buttonRow}>
      <a
        href="https://www.linkedin.com/in/sheharyarabid/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        LinkedIn <span className={styles.externalIcon}>↗</span>
      </a>

      <a
        href="https://github.com/sheharyarabid"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Github <span className={styles.externalIcon}>↗</span>
      </a>

      <a
        href="https://drive.google.com/file/d/1aAc9s9xWyOkNB4S14npOuDwfqkc4HjCK/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Resume <span className={styles.externalIcon}>↗</span>
      </a>

      <a href="tel:+923345575157" className={styles.button}>
        Phone
      </a>

      <a href="mailto:iamsheharyarabid@gmail.com" className={styles.button}>
        Email
      </a>
    </div>
  );
};

export default PillButtons;
