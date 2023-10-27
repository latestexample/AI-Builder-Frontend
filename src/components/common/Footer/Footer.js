import React from 'react';
import styels from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styels.sitefooter}>
      <Container>
        <div className={styels.sitefooter_inner}>
          <Row>
            <Col xs={12} sm={6}>
              <p>
                &#169; {new Date().getFullYear()} AI Builder. All rights
                reserved.
              </p>
            </Col>
            <Col xs={12} sm={6} className="mt-4 mt-sm-0">
              <div className={styels.sitefooter_Links}>
                <Link to="#">Terms</Link>
                <Link to="#">Privacy</Link>
                <Link to="#">Cookies</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
