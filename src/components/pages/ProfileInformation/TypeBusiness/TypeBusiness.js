import React, { useEffect, useState } from 'react';
import './TypeBusiness.scss';
import '../../../../assets/images/uploadbanner.jpg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import cardbanner from '../../../../assets/images/AddCompany_banner.jpg';
import searchicon from '../../../../assets/images/search-icon.svg';
import CreatableSelect from 'react-select/creatable';
import { http } from '../../../../utils/http';

const TypeBusiness = (props) => {
  const { setCurrentTab, setCheckList ,setActiveStep} = props;
  const [bussinessType, setBussinessType] = useState('');
  const [options, setOptions] = useState([]);
  const [clicked, setClicked] = useState(false)
  const[isNew,setIsNew]=useState(false)
  useEffect(() => {
    getOptions();
  }, []);

  const getOptions = () => {
    try {
      http.get('/api/v1/ai/get-business').then((res) => {
        if (res?.status === 200) {
          const data = res?.data?.data;
          const tempArr = [];
          data.map((opt) => {
            tempArr.push({ id: opt?.id, value: opt?.aiTerm, label: opt?.name });
          });
          setOptions(tempArr);
        }
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  const nextHandler = () => {
    setClicked(true)
    //store in localstorage
    if (bussinessType) {
      if(isNew){
        localStorage.setItem('TypeBusiness', "What type of business are you building?");
      }else{
        localStorage.setItem('TypeBusiness', bussinessType);
      }
     setTimeout(()=>{
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
     },1000)

    } 
  };

  return (
    <>
      <div className="common_stepcard typeBusiness">
        <div className="common_stepBanner">
          <img src={cardbanner} alt="img" />
        </div>
        <div className="common_stepheading">
          <h3>What type of business are you building?</h3>
        </div>
        <div className="typeBusiness_inputBox">
          <img src={searchicon} alt="icon" />
          <CreatableSelect
            options={options}
            className="searchBar"
            classNamePrefix="select"
            onChange={(e) => {
              if(e?.__isNew__){
                setIsNew(true)
              }
              setBussinessType(e.value);
            }}
          />

          {/* <input
            type="text"
            className="searchBar"
            placeholder="Search type of business "
            onChange={(e) => {
              setBussinessType(e.target.value);
            }}
          /> */}
        </div>

        {!bussinessType && clicked && <div className='error'><span>This step is required  </span></div>}
        <CommonButton
          text="Next"
          className="w-100"
          onClick={() => {
            nextHandler();
          }}
        />
      </div>
    </>
  );
};

export default TypeBusiness;
