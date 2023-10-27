import React from 'react';
import Img from '../../../assets/images/errorimg.png';
import styles from './NotFound.module.scss';
const NotFound = () => {
  return (
    <>
      <div className={styles.not_found}>
        <img src={Img} alt="" />
      </div>
    </>
  );
};

export default NotFound;
