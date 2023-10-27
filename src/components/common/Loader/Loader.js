import React from 'react';
import styles from './Loader.module.scss';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  );
};

export default Loader;
