import React from 'react';
import './CommonHeading.scss';

const CommonHeading = ({ heading, content, className }) => {
  return (
    <>
      <div className={`common_Heading ${className}`}>
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default CommonHeading;
