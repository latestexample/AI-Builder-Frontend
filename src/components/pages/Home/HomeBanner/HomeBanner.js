import React from 'react';
import './HomeBanner.scss';
import { Container } from 'react-bootstrap';
import CommonButton from '../../../common/CommonButton/CommonButton';
import websiteimg from '../../../../assets/images/websiteimg.svg';
import { isLoggedIn } from '../../../../utils/helper';
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {
  const navigate = useNavigate()

  const navigateHandler = (e) => {
    e.preventDefault()
    setTimeout(() => {
      isLoggedIn() ? navigate("/profile-information") : navigate("/login")
    }, 1000)
  }

  return (
    <>
      <div className="home_Banner">
        <Container>
          <div className="text-center">
            <h1>
              Build a website <br /> in 30 seconds with AI.
            </h1>
            <p>
              The AI website builder that generates an entire website with
              images and copy in seconds.
            </p>
            <CommonButton onClick={(e) => {navigateHandler(e)}} text="Generate your website" />
          </div>
        </Container>
      </div>

      <Container>
        <div className="websiteimg">
          <img src={websiteimg} alt="img" />
        </div>
      </Container>
    </>
  );
};

export default HomeBanner;
