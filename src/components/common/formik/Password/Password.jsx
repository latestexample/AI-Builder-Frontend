import React, { useState } from 'react';
import styles from '../Input/Input.module.scss';
import { ErrorMessage, Field } from 'formik';
import Errormsg from '../ErrorMsg/Errormsg';
import { EyeClose, EyeOpen } from '../../../../assets/svgs/svg';

const Password = ({ label, icon, name, className, type, ...rest }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles.input_group} ${className || ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.input_group_inner}>
        <Field
          {...rest}
          type={show ? 'text' : 'password'}
          name={name}
          className={styles.input_group_password}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
        <span onClick={() => setShow(!show)} className={styles.lock_icon}>
          {show ? <EyeOpen /> : <EyeClose />}
        </span>
      </div>
      <ErrorMessage component={Errormsg} name={name} />
    </div>
  );
};

export default Password;
