import React from 'react';
import { Container } from 'react-bootstrap';
import Img from '../../../assets/images/norecord.png';
import styles from './NotRecord.module.scss';
const NotRecord = () => {
  return (
    <>
      <Container className="my-auto">
        <div className={styles.no_record}>
          <img src={Img} alt="" />
          <h3>No Record Found</h3>
        </div>
      </Container>
    </>
  );
};

export default NotRecord;
