import React from 'react';
import './TryAiBuildr.scss';
import { Container } from 'react-bootstrap';
import CommonHeading from '../../../common/CommonHeading/CommonHeading';
import CommonButton from '../../../common/CommonButton/CommonButton';
import { isLoggedIn } from '../../../../utils/helper';
import { useNavigate } from 'react-router-dom';

const TryAiBuildr = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="try_aiBuildr py-100">
        <Container>
          <CommonHeading
            heading="Try AIBuildr free today"
            content="Build your website in 30 seconds and get access to the only AI app made for small businesses. Free for 90 days."
          />
          <div className="btngroup">
            <CommonButton onClick={()=>{isLoggedIn()?navigate("/profile-information"):navigate("/login")}}  text="Generate Your Website" />
            <CommonButton text="Contact Us" className="border-btn" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TryAiBuildr;
