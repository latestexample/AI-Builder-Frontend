import React from 'react';
import styles from './LoginLayout.module.scss';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className={styles.login_layout}>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
