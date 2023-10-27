import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/blue_Logo.svg';
import { Container } from 'react-bootstrap';
import { isLoggedIn } from '../../../utils/helper';

const Header = () => {
const navigate=useNavigate()
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_Logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.header_Signupbtn}>
        {isLoggedIn() ?<Link to="#" onClick={()=>{localStorage.clear();navigate("/login")}}>Log out</Link>:<Link to="/login">Sign In</Link>} 
        </div>
      </Container>
    </header>
  );
};

export default Header;
