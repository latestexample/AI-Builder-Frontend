import React from 'react';
import './loader.scss';

function Loader(props) {
    const{message}=props
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="message">{message || "Loading..."}</p>
    </div>
  );
}

export default Loader;
