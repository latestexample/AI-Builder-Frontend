import React, { useEffect } from 'react';
import global from '../../../globallogin.module.scss';
import { Col, Row } from 'react-bootstrap';
import FormikControl from '../../common/formik/FormikControl';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { LogoIcon, MailIcon } from '../../../assets/svgs/svg';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import googleicon from '../../../assets/images/google-icon.svg';
import starticon from '../../../assets/images/stars_vector.svg';
import userimg1 from '../../../assets/images/testimg3.png';
import userimg2 from '../../../assets/images/user1.png';
import userimg3 from '../../../assets/images/user2.png';
import userimg4 from '../../../assets/images/user3.png';
import userimg5 from '../../../assets/images/user4.png';


import CommonButton from '../../common/CommonButton/CommonButton';
import { http } from '../../../utils/http';
import { isLoggedIn } from '../../../utils/helper';
import vectorIcon from "../../../assets/images/art_img.svg"

const Login = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/")
    }
  }, [])

  const validationSchema = Yup.object({
    email: Yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email').required('This field is required'),
    password: Yup.string().required('This field is required'),
  });
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, submitProps) => {
    let body = {
      email: values?.email,
      password: values?.password,
    };

    try {
      http.post('/api/v1/auth/login', body).then((res) => {
        submitProps.setSubmitting(false);
        if (res?.status == 200) {
          toast.success(res?.data?.message);
          localStorage.setItem('token', res?.data?.data?.token);
          navigate('/profile-information');
        }
      });
    } catch (error) {
      submitProps.setSubmitting(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className={global.common_login_screens}>
        <Row className="mx-0">
          <Col xs={12} lg={6} className={`px-0 ${global.login_Col}`}>
            <div className={global.login_box}>
              <div className={global.login_box_heading}>
                <Link to="/">
                  <LogoIcon />
                </Link>
                <h2>Login</h2>
              </div>
              {
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <Form>
                      <Row>
                        <Col xs={12}>
                          <FormikControl
                            type="email"
                            label="Email*"
                            placeholder="Enter your email"
                            name="email"
                          />
                        </Col>
                        <Col xs={12}>
                          <FormikControl
                            control="password"
                            label="Password*"
                            name="password"
                            placeholder="Password"
                            className="mb-4"
                          />
                          {/* <p className={global.characterLimit}>
                            Must be at least 8 characters.
                          </p> */}
                          {/* <div className='text-end'>
                               <Link to="/forgot-password" className={`text-yellow ${styles.forgot_link}`}>Forgot password?</Link>
                              </div> */}
                        </Col>
                        <Col xs={12} className="my-5">
                          <CommonButton
                            isLoading={formik.isSubmitting}
                            type="submit"
                            text="Login"
                            fluid={true}
                            disabled={!formik.isValid}
                          />
                          <button
                            isLoading={formik.isSubmitting}
                            disabled={!formik.isValid}
                            type="submit"
                            className="w-100 mt-4 btn-style white-btn"
                          >
                            <img
                              className="me-4"
                              src={googleicon}
                              alt="Google"
                            />{' '}
                            Sign up with Google
                          </button>
                        </Col>
                      </Row>
                      <p className={global.donotAccount}>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              }
            </div>
            <div className={global.login_Footer}>
              <p>© AI Builder</p>
              <p>
                <MailIcon /> help@aibuilder.com
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6} className="px-0">
            <div className={global.login_boxContent}>
              <div className={global.login_boxContent_Inner}>
                <img className={global.starticon} src={starticon} alt="icon" />
                <h2>Build a website in 30 Seconds with AI</h2>
                <p>
                  The AI website builder that generates an entire website with
                  images and copy in seconds.
                </p>
                <div className={global.loginUser}>
                  <div className={global.userImage}>
                    <img src={userimg1} alt="img" />
                    <img src={userimg2} alt="img" />
                    <img src={userimg3} alt="img" />
                    <img src={userimg4} alt="img" />
                    <img src={userimg5} alt="img" />
                  </div>
                  <span>Join 40,000+ users</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className={global.arrowVector}>
          <img src={vectorIcon} alt='img' />
        </div>
      </div>
    </>
  );
};

export default Login;
