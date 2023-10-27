import React from 'react';
import './OurMission.scss';
import { Col, Container, Row } from 'react-bootstrap';
import CommonHeading from '../../../common/CommonHeading/CommonHeading';
import { GlobalwhiteIcon } from '../../../../assets/svgs/svg';

const OurMission = () => {
  const websitelistdata = [
    {
      subheading: 'Website',
      heading: 'Analytics,Domain Names and More',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      subheading: 'Promotion',
      heading: 'Automate your marketing efforts',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      subheading: 'Quick',
      heading: 'Generate your business website in few seconds',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      subheading: 'AI CRM',
      heading: 'Analytics,Domain Names and More',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      subheading: 'AI Assistant',
      heading: 'Automate your marketing efforts',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
    {
      subheading: 'Invoicing',
      heading: 'Generate your business website in few seconds',
      text: 'Generate a fully designed website with copy, images, and a contact form in under a minute..',
    },
  ];
  return (
    <>
      <div className="ourMission py-200">
        <Container>
          <CommonHeading
            heading="Our mission is to make owning a business easier than having a job."
            content="Lorem ipsum dolor sit amet consectetur. Phasellus aliquam ultrices odio fusce adipiscing erat. Morbi adipiscing risus convallis mauris auctor. Mattis varius"
          />
          <Row>
            {websitelistdata.map((data, i) => {
              return (
                <Col key={i} xs={12} md={6} lg={4} className="d-flex">
                  <div className="ourMission_Box w-100">
                    <span className="globalIcon">
                      <GlobalwhiteIcon />
                    </span>
                    <h6>{data.subheading}</h6>
                    <h3>{data.heading}</h3>
                    <p>{data.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurMission;
