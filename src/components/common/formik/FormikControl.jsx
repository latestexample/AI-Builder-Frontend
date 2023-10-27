import React from 'react';
import Password from './Password/Password';
import Input from './Input/Input';
import Select from './Select/Select';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'password':
      return <Password {...rest} />;
    case 'select':
      return <Select {...rest} />;
    default:
      return <Input {...rest} />;
  }
};

export default FormikControl;
