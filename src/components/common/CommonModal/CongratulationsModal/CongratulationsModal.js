import React from 'react';
import styles from './CongratulationsModal.module.scss';
import { Modal } from 'react-bootstrap';
import checkicon from '../../../../assets/images/Congratulations.svg';
import { Link } from 'react-router-dom';

const CongratulationsModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        centered
        className={styles.congratulations_Modal}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={checkicon} alt="" />
            <h2>Congratulations!</h2>
            <p>
              Your email has been successfully verified. Now you can access all
              the features.
            </p>
            <Link to="/" className="btn-style">
              Go to dashboard
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CongratulationsModal;
