import React from 'react';
import './BusinessWebsite.scss';
import { Col, Container, Row } from 'react-bootstrap';
import CommonHeading from '../../../common/CommonHeading/CommonHeading';
import { CheckIcon } from '../../../../assets/svgs/svg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import websitebul from '../../../../assets/images/business-img.svg';
import { isLoggedIn } from '../../../../utils/helper';
import { useNavigate } from 'react-router-dom';

const BusinessWebsite = () => {
  const navigate=useNavigate()
  const websitelistdata = [
    { text: 'Business' },
    { text: 'Entertaiment' },
    { text: 'Promotion' },
    { text: 'E-Commerce' },
    { text: 'Electronic' },
    { text: <span>Many more <small><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 10.5C13.1046 10.5 14 11.3954 14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5Z" fill="#5D7BE5"/>
    <path d="M4 10.5C5.10457 10.5 6 11.3954 6 12.5C6 13.6046 5.10457 14.5 4 14.5C2.89543 14.5 2 13.6046 2 12.5C2 11.3954 2.89543 10.5 4 10.5Z" fill="#5D7BE5"/>
    <path d="M20 10.5C21.1046 10.5 22 11.3954 22 12.5C22 13.6046 21.1046 14.5 20 14.5C18.8954 14.5 18 13.6046 18 12.5C18 11.3954 18.8954 10.5 20 10.5Z" fill="#5D7BE5"/>
    <path d="M12 10.5C13.1046 10.5 14 11.3954 14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5Z" stroke="#5D7BE5" stroke-width="1.5"/>
    <path d="M4 10.5C5.10457 10.5 6 11.3954 6 12.5C6 13.6046 5.10457 14.5 4 14.5C2.89543 14.5 2 13.6046 2 12.5C2 11.3954 2.89543 10.5 4 10.5Z" stroke="#5D7BE5" stroke-width="1.5"/>
    <path d="M20 10.5C21.1046 10.5 22 11.3954 22 12.5C22 13.6046 21.1046 14.5 20 14.5C18.8954 14.5 18 13.6046 18 12.5C18 11.3954 18.8954 10.5 20 10.5Z" stroke="#5D7BE5" stroke-width="1.5"/>
  </svg></small></span> },
  ];
  return (
    <>
      <div className="businessWebsite">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="order-lg-last">
              <div className="businessWebsite_Content">
                <CommonHeading
                  heading="Get your business site running in minutes"
                  content="Lorem ipsum dolor sit amet consectetur. Phasellus aliquam ultrices odio fusce adipiscing erat. Morbi adipiscing risus convallis mauris auctor. Mattis varius"
                />
                <div className="businessbtn">
                  {websitelistdata.map((data, i) => {
                    return (
                      <div className="businessbtn_Btn" key={i}>
                        <CheckIcon />
                        <p>{data.text}</p>
                      </div>
                    );
                  })}
                </div>
                <CommonButton onClick={()=>{isLoggedIn()?navigate("/profile-information"):navigate("/login")}} text="Generate your website" />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="websiteBuilder_Image mt-5 mt-lg-0">
                <img src={websitebul} alt="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BusinessWebsite;
