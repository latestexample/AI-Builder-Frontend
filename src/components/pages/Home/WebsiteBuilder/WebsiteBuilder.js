import React from 'react';
import './WebsiteBuilder.scss';
import { Col, Container, Row } from 'react-bootstrap';
import CommonHeading from '../../../common/CommonHeading/CommonHeading';
import { GlobalIcon } from '../../../../assets/svgs/svg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import btnicon from '../../../../assets/images/rightarrow.svg';
import websitebul from '../../../../assets/images/website-builder.svg';
import { isLoggedIn } from '../../../../utils/helper';
import { useNavigate } from 'react-router-dom';

const WebsiteBuilder = () => {
  const navigate=useNavigate()
  const websitelistdata = [
    {
      heading: 'Get your business online in three clicks',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      heading: 'Effortlessly customize your site',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      heading: 'Start marketing right away',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
  ];
  return (
    <>
      <div className="websiteBuilder">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="websiteBuilder_Content">
                <CommonHeading
                  heading="The world’s fastest website builder"
                  content="Lorem ipsum dolor sit amet consectetur. Phasellus aliquam ultrices odio fusce adipiscing erat. Morbi adipiscing r"
                />
                <div className="websiteList">
                  {websitelistdata.map((data, i) => {
                    return (
                      <div className="websiteList_Box" key={i}>
                        <figure>
                          <GlobalIcon />
                        </figure>
                        <div className="websiteList_Text">
                          <h4>{data.heading}</h4>
                          <p>{data.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <CommonButton
                  className="border-btn"
                  onClick={()=>{isLoggedIn()?navigate("/profile-information"):navigate("/login")}}
                  text="Generate your website"
                  icon={btnicon}
                  iconclass="d-block ms-3"
                />
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

export default WebsiteBuilder;
