import React, { useState } from 'react';
import './UploadLogo.scss';
import '../../../../assets/images/uploadbanner.jpg';
import CommonButton from '../../../common/CommonButton/CommonButton';
import { PhotoIcon } from '../../../../assets/svgs/svg';
import { Link } from 'react-router-dom';
import cardbanner from '../../../../assets/images/uploadbanner.jpg';
import { toast } from 'react-hot-toast';
import { http } from '../../../../utils/http';
import Loader from '../../../../loader_file/Loader';

const UploadLogo = (props) => {
  const { setCurrentTab, setCheckList ,setActiveStep} = props;
  const imageExtention = [
    'image/svg+xml',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/jpeg',
  ];
  const [items, setItems] = useState('');
  const [itemsPreview, setItemsPreview] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");

  const handleDragStart = (e, id) => {
    e.preventDefault();
    e.dataTransfer.setData("text/plain", e.target.id)
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setItems(droppedFile);
      setItemsPreview(URL.createObjectURL(droppedFile));
    }
  };

  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (imageExtention.includes(file?.type)) {
        const image = new Image();
        image.src = URL.createObjectURL(file)
        image.onload = () => {
          const imageSize = {
            width: image.width,
            height: image.height,
          }
          if (imageSize?.height > 200 || imageSize?.width>500) {
            toast.error('please select logo with (500x200)px or less');
          }else{
            setItemsPreview(URL.createObjectURL(file));
            setItems(file);
          }
        }
        
      } else {
        toast.error('please select valid extention !');
      }
    }
  };

  const handlesubmit = () => {
    setClicked(true)
    if (items && !isChecked) {
      let formData = new FormData();
      formData.append('upload', items);
      formData.append('type', 'logo');
      try {
        setLoaderMessage('Your logo is being uploaded and prepared.')
        http.post('/api/v1/file/upload', formData).then((res) => {
          setLoaderMessage("")
          if (res?.status === 200) {
            toast.success(res?.data?.message);
            localStorage.setItem('logo', res?.data?.data?.image);
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
          }
        });
      } catch (err) {
        setLoaderMessage('')
        console.log("error", err);
      }
    } else if (isChecked) {
      localStorage.removeItem("logo")
      setTimeout(() => {
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
      }, 1000)

    }
  };

  const removeImageHandler = (e) => {
    e.preventDefault()
    if (localStorage.getItem("logo")) {
      localStorage.removeItem("logo")
      //api call 
      setItems("");
      setItemsPreview("")
    } else {
      setItems("");
      setItemsPreview("")
    }
  }

  return (
    <>
      <div className="common_stepcard uploadLogo" draggable>
        <div className="common_stepBanner">
          <img src={cardbanner} alt="img" />
        </div>
        <div className="common_stepheading">
          {itemsPreview ? <h3>Preview </h3> : <h3>Upload your logo</h3>}
          {!itemsPreview ?
            <p>
              Please upload your logo. We recommend using a high-resolution image in a vector format like SVG or a high-quality PNG with a transparent background. Providing your logo in various sizes ensures the best display across different platforms and media. If you're uncertain about the format or size, feel free to contact us for assistance.
            </p> :
            <p>
              Thank you for uploading your logo in the correct format.
            </p>
          }
        </div>
        {!itemsPreview && !isChecked &&
          <div
            className="uploadLogo_inputBox"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
            draggable
            onDragStart={(e) => handleDragStart(e)}
          >
            <input
              type="file"
              className="uplaodfile"
              accept=".svg, .png, .jpg, .jpeg"
              onChange={(e) => {
                onChangeHandler(e);
              }}
            />
            <span className="photoicon">
              <PhotoIcon />
            </span>
            <p>
              <Link to="#">Click to upload</Link> or drag and drop
            </p>
            <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>}

        {itemsPreview &&
          <div class="image-container" onClick={(e) => { removeImageHandler(e) }}>
            <img src={itemsPreview} alt="logo" />
            <div class="close-icon">&times;</div>
          </div>
        }

        {!items && <div className='mb-4'>
          <input type='checkbox' id="checkbox"  onChange={(e) => { setClicked(false); setIsChecked(e.target.checked) }} />{"  "}<label htmlFor='checkbox' className='ms-3'>Use my business name as the logo</label>
        </div>}

        {!isChecked && !items && clicked && <div className='error'><span>This step is required either upload logo or click on checkbox </span></div>}
        <CommonButton
          onClick={(e) => {
            handlesubmit(e);
          }}
          text="Next"
          className="w-100"
        />
        {loaderMessage && <Loader message={loaderMessage} />}
      </div>
    </>
  );
};

export default UploadLogo;
