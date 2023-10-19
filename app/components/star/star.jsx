import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styles from './star.module.css';

const Star = ({ isActive, onClick }) => {
  return (
   
      <button className={styles.estrela} onClick={onClick}>
        {isActive ? <AiFillStar className={styles.e} color="yellow" size={32} /> : <AiFillStar className={styles.e} color="white" size={32} />}
      </button>
   
  );
};

export default Star;