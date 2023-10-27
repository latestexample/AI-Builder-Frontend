import React from 'react';
import styles from './Input.module.scss';
import { ErrorMessage, Field } from 'formik';
import Errormsg from '../ErrorMsg/Errormsg';
import { isStrictAlphanumeric } from '../../../../utils/helper';

const Input = ({ label, icon, name, type, className, formik, ...rest }) => {
  return (
    <div className={`${styles.input_group} ${className || ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.input_group_inner}>
        <Field {...rest} type={type || 'text'} name={name} />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
      <ErrorMessage name={name}>
        {(msg) => {
          return <Errormsg>{msg}</Errormsg>;
        }}
      </ErrorMessage>
    </div>
  );
};

export default Input;
