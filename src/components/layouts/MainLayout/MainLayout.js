import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import styles from './MainLayout.module.scss';
const MainLayout = () => {
  return (
    <>
      <div className={styles.main_layout}>
        <Header />
        <div className={styles.main_layout_inner}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
