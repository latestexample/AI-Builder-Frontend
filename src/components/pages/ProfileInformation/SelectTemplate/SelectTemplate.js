import React, { useEffect, useState } from 'react';
import './SelectTemplate.scss';
import '../../../../assets/images/uploadbanner.jpg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import cardbanner from '../../../../assets/images/computer.svg';
import { http } from '../../../../utils/http';
import { useNavigate } from 'react-router-dom';
import { WhiteCheckIcon } from '../../../../assets/svgs/svg';

const SelectTemplate = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const[checkedId,setCheckedId]=useState("")
  const navigate = useNavigate()

  useEffect(() => {
    getTemplate();
  }, []);

  const getTemplate = () => {
    try {
      http.get('/api/v1/template/10/1').then((res) => {
        if (res?.status == 200) {
          setTemplates(res?.data?.data);
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const generateHandler = (e) => {
    e.preventDefault();
    if(selectedTemplate){
      localStorage.setItem("selectedTemp",JSON.stringify(selectedTemplate))
      setTimeout(()=>{
        navigate("/template/preview")
      },1000)
    }
  }

  return (
    <>
      <div className="common_stepcard selectTemplate">
        <div className="common_stepBanner">
          <img src={cardbanner} alt="img" />
        </div>
        <div className="common_stepheading">
          <h3>Select a template</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Phasellus aliquam ultrices
            odio fusce adipiscing erat. Morbi adipiscing.
          </p>
        </div>
        <div className="selectTemplate_templateBox">
          {templates && templates?.map((data, index) =>
            <span key={index} >
              <label className={`image-radio ${checkedId===data?.id?'selectcheck':''}`} onClick={()=>{setCheckedId(data?.id)}} >
                <span className='checkIcon'><WhiteCheckIcon /></span>
                <input type="radio" onChange={()=>{setSelectedTemplate(data)}} name="option" className="radio-input" />
                <img src={data?.image} alt="img" className="radio-image " />
              </label>
            </span>
          )}
        </div>
        <CommonButton text="Generate" className="w-100" onClick={(e) => { generateHandler(e) }} />
      </div>
    </>
  );
};

export default SelectTemplate;
