import React from 'react';
import './TestimonialSec.scss';
import { Col, Container, Row } from 'react-bootstrap';
import CommonHeading from '../../../common/CommonHeading/CommonHeading';
import testimonialimg from '../../../../assets/images/testimg1.png';
import testimonialimg1 from '../../../../assets/images/testimg2.png';
import testimonialimg2 from '../../../../assets/images/testimg3.png';
import Slider from 'react-slick';

const TestimonialSec = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const websitelistdata = [
    { heading: '“Really love it”' },
    { heading: '“Really love it”' },
    { heading: '“Really love it”' },
    { heading: '“Really love it”' },
  ];
  return (
    <>
      <div className="testimonialSec">
        <Container>
          <CommonHeading
            heading="Join millions of business owners who started with AIBuildr."
            content="Lorem ipsum dolor sit amet consectetur. Phasellus aliquam ultrices odio fusce adipiscing erat. Morbi adipiscing risus convallis mauris auctor. Mattis varius"
          />
          <Row>
            <Col xs={12} lg={8}>
              <div className="testimonial_Image d-flex ">
                <figure>
                  <img src={testimonialimg} alt="img" />
                </figure>
                <figure className="mx-5">
                  <img src={testimonialimg1} alt="img" />
                </figure>
                <figure>
                  <img src={testimonialimg2} alt="img" />
                </figure>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="testimonial_Slider">
                <Slider {...settings}>
                  {websitelistdata.map((data, i) => {
                    return (
                      <div key={i} className="testimonial_Box">
                        <h3>{data.heading}</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Phasellus
                          aliquam ultrices odio fusce adipiscing erat. Morbi
                          adipiscing risus convallis mauris auctor. Mattis
                          varius. Morbi adipiscing risus convallis mauris
                          auctor. Mattis varius.
                        </p>
                        <h4>Torik Handoko</h4>
                        <span>
                          <i>Founder & CEO</i>
                        </span>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TestimonialSec;
