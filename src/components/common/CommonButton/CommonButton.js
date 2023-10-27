import React from 'react';
import './CommonButton.scss';
import { Spinner } from 'react-bootstrap';

const CommonButton = ({
  isLoading,
  fluid,
  type,
  onClick,
  disabled,
  text,
  icon,
  className,
  iconclass,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={isLoading || disabled}
      className={`${fluid ? 'w-100 btn-style' : 'btn-style'} ${className}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : text}
      <img className={`btn_icon ${iconclass}`} src={icon} alt="icon" />
    </button>
  );
};

export default CommonButton;
