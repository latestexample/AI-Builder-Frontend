import React, { useEffect } from 'react';
import './ProfileInformation.scss';
import CommonButton from '../../common/CommonButton/CommonButton';
import MailIcon from '../../../assets/images/email.svg';
import { Link, useNavigate } from 'react-router-dom';
import { LeftarrowIcon } from '../../../assets/svgs/svg';
import UploadLogo from './UploadLogo/UploadLogo';
import ChooseColor from './ChooseColor/ChooseColor';
import AddCompany from './AddCompany/AddCompany';
import SelectTemplate from './SelectTemplate/SelectTemplate';
import { useState } from 'react';
import TypeBusiness from './TypeBusiness/TypeBusiness';
import { isLoggedIn } from '../../../utils/helper';

const ProfileInformation = () => {
  const navigate = useNavigate();
  const [windowSize,setWindowSize]=useState(window.innerWidth )
  window.addEventListener('load', checkMediaQuery);
  window.addEventListener('resize', checkMediaQuery);
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login")
    }
  }, [])

  function checkMediaQuery() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      setWindowSize(window.innerWidth)
    } else {
      setWindowSize(window.innerWidth)
    }
  }

  const [currentTab, setCurrentTab] = useState('UploadLogo');

  const [activeStep, setActiveStep] = useState({
    title: "Upload Logo",
    description: "Make Your Brand Shine"
  })
  const [checkList, setCheckList] = useState({
    UploadLogo: false,
    ChooseColor: false,
    TypeBusiness: false,
    AddCompany: false,
    SelectTemplate: false,
  });

  const backTabHandler = () => {
    // e.preventDefault();
    if (currentTab === 'ChooseColor') {
      setCheckList({
        UploadLogo: false,
        ChooseColor: false,
        TypeBusiness: false,
        AddCompany: false,
        SelectTemplate: false,
      });
      setCurrentTab('UploadLogo');
      setActiveStep({
        title: "Upload Logo",
        description: "Make Your Brand Shine"
      })
    } else if (currentTab === 'TypeBusiness') {
      setCheckList({
        UploadLogo: true,
        ChooseColor: false,
        TypeBusiness: false,
        AddCompany: false,
        SelectTemplate: false,
      });
      setActiveStep({
        title: "Choose Color",
        description: "Choose Your Brand's Colors"
      })
      setCurrentTab('ChooseColor');
    } else if (currentTab === 'AddCompany') {
      setCheckList({
        UploadLogo: true,
        ChooseColor: true,
        TypeBusiness: false,
        AddCompany: false,
        SelectTemplate: false,
      });
      setActiveStep({
        title: "Business Type",
        description: "Select Your Business Type"
      })
      setCurrentTab('TypeBusiness');
    } else if (currentTab === 'SelectTemplate') {
      setCheckList({
        UploadLogo: true,
        ChooseColor: true,
        TypeBusiness: true,
        AddCompany: false,
        SelectTemplate: false,
      });
      setActiveStep({
        title: "Add Company Details",
        description: "Complete Your Company's Profile"
      })
      setCurrentTab('AddCompany');
    }
  };

  const progressBarHandler = (current) => {
    if (current === 'UploadLogo') {
      setCheckList({
        UploadLogo: false,
        ChooseColor: false,
        TypeBusiness: false,
        AddCompany: false,
        SelectTemplate: false,
      });
      setCurrentTab('UploadLogo');
      setActiveStep({
        title: "Upload Logo",
        description: "Make Your Brand Shine"
      })
    }
    else if (current === 'ChooseColor') {
      setCheckList({
        UploadLogo: true,
        ChooseColor: false,
        TypeBusiness: false,
        AddCompany: false,
        SelectTemplate: false,
      });
      setCurrentTab('ChooseColor');
      setActiveStep({
        title: "Choose Color",
        description: "Choose Your Brand's Colors"
      })
    } else if (current === 'TypeBusiness') {
      setCheckList({
        UploadLogo: true,
        ChooseColor: true,
        TypeBusiness: false,
        AddCompany: false,
        SelectTemplate: false,
      });
       setActiveStep({
        title: "Business Type",
        description: "Select Your Business Type"
      })
      setCurrentTab('TypeBusiness');
    } else if (current === 'AddCompany') {
      setCheckList({
        UploadLogo: true,
        ChooseColor: true,
        TypeBusiness: true,
        AddCompany: false,
        SelectTemplate: false,
      });
      setActiveStep({
        title: "Add Company Details",
        description: "Complete Your Company's Profile"
      })
      setCurrentTab('AddCompany');
    } else if (current === 'SelectTemplate') {
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
    }
  }


  return (
    <>
      {windowSize<= 768 ? <div className="profileInformation">
          <div className="profileInformation_setpsBar">
            <div className="setpsBox">
              <h2>Complete Profile Information</h2>
              <ul className="setpsBox_Namelist">
                <li onClick={(e) => { checkList?.UploadLogo ? progressBarHandler("UploadLogo") : e.preventDefault() }} className={checkList?.UploadLogo ? 'active pointer' : currentTab == "UploadLogo" ? 'inProgress' : ""}></li>
                <li onClick={(e) => { checkList?.ChooseColor ? progressBarHandler("ChooseColor") : e.preventDefault() }} className={checkList?.ChooseColor ? 'active pointer' : currentTab == "ChooseColor" ? 'inProgress' : ""}>
                </li>
                <li onClick={(e) => { checkList?.TypeBusiness ? progressBarHandler("TypeBusiness") : e.preventDefault() }} className={checkList?.TypeBusiness ? 'active pointer' : currentTab == "TypeBusiness" ? 'inProgress' : ""}>
                </li>
                <li onClick={(e) => { checkList?.AddCompany ? progressBarHandler("AddCompany") : e.preventDefault() }} className={checkList?.AddCompany ? 'active pointer' : currentTab == "AddCompany" ? 'inProgress' : ''}>
                </li>
                <li onClick={(e) => { checkList?.SelectTemplate ? progressBarHandler("SelectTemplate") : e.preventDefault() }} className={checkList?.SelectTemplate ? 'active pointer' : currentTab == "SelectTemplate" ? 'inProgress' : ''}>
                </li>
              </ul>
              <div className="active-step">
                <h2>{activeStep?.title}</h2>
                <p> {activeStep?.description}</p>
              </div>
            </div>
          </div>
          <div className="profileInformation_rightbar">
            {currentTab != 'UploadLogo' && (
              <div className="backbtn">
                <Link
                  to="#"
                  onClick={() => {
                    setTimeout(backTabHandler, 1000);
                  }}
                >
                  <LeftarrowIcon /> Back
                </Link>
              </div>
            )}

            <div className={currentTab == 'UploadLogo' ? 'd-block' : 'd-none'}>
              <UploadLogo
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
            <div className={currentTab == 'ChooseColor' ? 'd-block' : 'd-none'}>
              <ChooseColor
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
            <div className={currentTab == 'TypeBusiness' ? 'd-block' : 'd-none'}>
              <TypeBusiness
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                 setActiveStep={setActiveStep}
              />
            </div>
            <div className={currentTab == 'AddCompany' ? 'd-block' : 'd-none'}>
              <AddCompany
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                 setActiveStep={setActiveStep}
              />
            </div>
            <div
              className={currentTab == 'SelectTemplate' ? 'd-block' : 'd-none'}
            >
              <SelectTemplate
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>

          </div>
          <div className="profileInformation_setpsBar">
            <div className="setpsBox">
              <div className="setpsFooter">
                <h3>Having Trouble?</h3>
                <p>
                  Feel free to contact us and we will always help you through the
                  process.
                </p>
                <CommonButton
                  text="Contact Us"
                  className="white-border-btn"
                  iconclass="d-block"
                  icon={MailIcon}
                />
              </div>
            </div>
          </div>
        </div> : 
        <div className="profileInformation">
          <div className="profileInformation_setpsBar">
            <div className="setpsBox">
              <h2>Complete Profile Information</h2>
              <ul className="setpsBox_Namelist">
                <li onClick={(e) => { checkList?.UploadLogo ? progressBarHandler("UploadLogo") : e.preventDefault() }} className={checkList?.UploadLogo ? 'active pointer' : currentTab == "UploadLogo" ? 'inProgress' : ""}>
                  <h6>Upload Logo</h6>
                  <p> Make Your Brand Shine</p>
                </li>
                <li onClick={(e) => { checkList?.ChooseColor ? progressBarHandler("ChooseColor") : e.preventDefault() }} className={checkList?.ChooseColor ? 'active pointer' : currentTab == "ChooseColor" ? 'inProgress' : ""}>
                  <h6>Choose Color</h6>
                  <p>Choose Your Brand's Colors</p>
                </li>
                <li onClick={(e) => { checkList?.TypeBusiness ? progressBarHandler("TypeBusiness") : e.preventDefault() }} className={checkList?.TypeBusiness ? 'active pointer' : currentTab == "TypeBusiness" ? 'inProgress' : ""}>
                  <h6>Business Type</h6>
                  <p>Select Your Business Type</p>
                </li>
                <li onClick={(e) => { checkList?.AddCompany ? progressBarHandler("AddCompany") : e.preventDefault() }} className={checkList?.AddCompany ? 'active pointer' : currentTab == "AddCompany" ? 'inProgress' : ''}>
                  <h6>Add Company Details</h6>
                  <p>Complete Your Company's Profile</p>
                </li>
                <li onClick={(e) => { checkList?.SelectTemplate ? progressBarHandler("SelectTemplate") : e.preventDefault() }} className={checkList?.SelectTemplate ? 'active pointer' : currentTab == "SelectTemplate" ? 'inProgress' : ''}>
                  <h6>Choose a Template</h6>
                  <p>Select a Design Template</p>
                </li>
              </ul>
            </div>
            <div className="setpsFooter">
              <h3>Having Trouble?</h3>
              <p>
                Feel free to contact us and we will always help you through the
                process.
              </p>
              <CommonButton
                text="Contact Us"
                className="white-border-btn"
                iconclass="d-block"
                icon={MailIcon}
              />
            </div>
          </div>
          <div className="profileInformation_rightbar">
            {currentTab != 'UploadLogo' && (
              <div className="backbtn">
                <Link
                  to="#"
                  onClick={() => {
                    setTimeout(backTabHandler, 1000);
                  }}
                >
                  <LeftarrowIcon /> Back
                </Link>
              </div>
            )}

            <div className={currentTab == 'UploadLogo' ? 'd-block' : 'd-none'}>
              <UploadLogo
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
            <div className={currentTab == 'ChooseColor' ? 'd-block' : 'd-none'}>
              <ChooseColor
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
            <div className={currentTab == 'TypeBusiness' ? 'd-block' : 'd-none'}>
              <TypeBusiness
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
            <div className={currentTab == 'AddCompany' ? 'd-block' : 'd-none'}>
              <AddCompany
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
            <div
              className={currentTab == 'SelectTemplate' ? 'd-block' : 'd-none'}
            >
              <SelectTemplate
                setCheckList={setCheckList}
                setCurrentTab={setCurrentTab}
                setActiveStep={setActiveStep}
              />
            </div>
          </div>
        </div>
      }

    </>
  );
};

export default ProfileInformation;
