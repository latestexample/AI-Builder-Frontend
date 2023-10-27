import React, { useState } from 'react';
import './ChooseColor.scss';
import '../../../../assets/images/uploadbanner.jpg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import { HuePicker, MaterialPicker } from 'react-color';
import computericon from "../../../../assets/images/computer.svg"

const ChooseColor = (props) => {
  const { setCurrentTab, setCheckList ,setActiveStep} = props;
  const [selectedColor, setSelectedColor] = useState('');
  const [clicked, setClicked] = useState(false)

  const submitHandler = () => {
    setClicked(true)
    if (selectedColor) {
      localStorage.setItem('selectedColor', selectedColor);
      setTimeout(() => {
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
      }, 1000)

    }
  };

  return (
    <>
      <div className="common_stepcard chooseColor">
        <div className="common_stepBanner">
          <div className='chooseColor_banner'>
            <div className='banner_icon'>
              <img src={computericon} alt="img" />
            </div>
            <div className='colorList d-flex'>
              <label
                onClick={() => { setSelectedColor("#FBECC9") }}
                className={selectedColor === "#FBECC9" ? 'clrbg1 selected' : 'clrbg1'}>
              </label>
              <label
                onClick={() => { setSelectedColor("#7EB2DD") }}
                className={selectedColor === "#7EB2DD" ? 'clrbg2 selected' : 'clrbg2'}>
              </label>
              <label
                onClick={() => { setSelectedColor("#445E93") }}
                className={selectedColor === "#445E93" ? 'clrbg3 selected' : 'clrbg3'}>
              </label>
              <label
                onClick={() => { setSelectedColor("#385160") }}
                className={selectedColor === "#385160" ? 'clrbg4 selected' : 'clrbg4'}>
              </label>
              <label
                onClick={() => { setSelectedColor("#38603C") }}
                className={selectedColor === "#38603C" ? 'clrbg5 selected' : 'clrbg5'}>
              </label>
              <label
                onClick={() => { setSelectedColor("#605738") }}
                className={selectedColor === "#605738" ? 'clrbg6 selected' : 'clrbg6'}>
              </label>
              <label
                onClick={() => { setSelectedColor("#603F38") }}
                className={selectedColor === "#603F38" ? 'clrbg7 selected' : 'clrbg7'}>
              </label>
            </div>
          </div>

          {/* end */}
        </div>
        <div className="common_stepheading">
          <h3>Choose a color for your website</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Phasellus aliquam ultrices
            odio fusce adipiscing erat. Morbi adipiscing.
          </p>
        </div>
        {window.innerWidth <= 768 ? 
        <>
        <div className="colorPicker">
          <div className='hue_col'>
            <HuePicker
              color={selectedColor}
              onChangeComplete={(data) => setSelectedColor(data?.hex)}
            />
          </div>
          </div>
          <div className="colorPicker">
          <div className='material_col'>
          <MaterialPicker
            color={selectedColor}
            onChangeComplete={(data) => setSelectedColor(data?.hex)}
          />
         </div>
        </div> </>: <div className="colorPicker">
          <div className='hue_col'>
            <HuePicker
              color={selectedColor}
              onChangeComplete={(data) => setSelectedColor(data?.hex)}
            />
          </div>
          <div className='material_col'>
            <MaterialPicker
              color={selectedColor}
              onChangeComplete={(data) => setSelectedColor(data?.hex)}
            />
          </div>
        </div>}

        {!selectedColor && clicked && <div className='error'><span>This step is required  </span></div>}
        <CommonButton
          text="Next"
          onClick={() => {
            submitHandler();
          }}
          className="w-100"
        />
      </div>
    </>
  );
};

export default ChooseColor;
