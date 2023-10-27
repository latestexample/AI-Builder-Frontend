import React, { useState } from 'react';
import './AddCompany.scss';
import '../../../../assets/images/uploadbanner.jpg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import cardbanner from '../../../../assets/images/AddCompany_banner.jpg';
import FormikControl from '../../../common/formik/FormikControl';
import { Col, Row } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

const AddCompany = (props) => {
  const { setCurrentTab, setCheckList,setActiveStep } = props;
  const [clicked, setClicked] = useState(false)
  const validationSchema = Yup.object({
    company_name: Yup.string().required('This field is required'),
    slogan: Yup.string().required('This field is required'),
    about: Yup.string().required('This field is required').min(500, 'Must be exactly 5 digits')
  });

  const initialValues = {
    company_name: '',
    slogan: '',
    about: '',
  };

  const handleSubmit = (values, submitProps) => {
    localStorage.setItem('addcompany', JSON.stringify(values));
    setTimeout(()=>{
      setCheckList({
        UploadLogo: true,
        ChooseColor: true,
        TypeBusiness: true,
        AddCompany: true,
        SelectTemplate: false,
      });
      setActiveStep({
        title: "Choose a Template",
        description: "Select a Design Template"
      })
      setCurrentTab('SelectTemplate');
    },1000)
    toast.success('added successfully');
  };

  return (
    <>
      <div className="common_stepcard addCompany">
        <div className="common_stepBanner">
          <img src={cardbanner} alt="img" />
        </div>
        <div className="common_stepheading">
          <h3>Complete Company Information</h3>
        </div>
        <div className="addCompany_frombox">
          {
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(e) => { handleSubmit(e) }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Row>
                    <Col xs={12}>
                      <FormikControl
                        type="Company Name"
                        label="Company Name*"
                        placeholder="Enter your business name"
                        name="company_name"
                      />
                    </Col>
                    <Col xs={12}>
                      <FormikControl
                        label="Slogan*"
                        name="slogan"
                        placeholder="Enter your business slogan"
                        className="mb-4"
                      />
                    </Col>
                    <Col xs={12}>
                      <div class="mb-3">
                        <label className="form-label">About your company *</label>
                        <textarea
                          className="form-control"
                          placeholder="Write here...."
                          rows="5"
                          name="about"
                          onChange={(e) => {
                            setFieldValue('about', e.target.value);
                          }}
                        ></textarea>
                        {clicked && !values?.about && <div className='error'>
                          This field is required
                        </div>}
                        {clicked &&
                          values?.about && values?.about.length < 500
                           &&
                          <div className='error'>
                            Please ensure the length is between 500 and greater.
                          </div>
                        }
                        <p>Optimal Word Count Range: Aim for 500 to 1000 words for the best results.</p>

                      </div>
                    </Col>
                  </Row>
                  <CommonButton onClick={() => { setClicked(true) }} text="Next" type="submit" className="w-100" />
                </Form>
              )}
            </Formik>
          }
        </div>
      </div>
    </>
  );
};

export default AddCompany;
