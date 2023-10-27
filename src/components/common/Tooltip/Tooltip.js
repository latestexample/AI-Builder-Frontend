import React from 'react';
import { InfoIcon } from '../../../assets/svgs/svg';
import styles from './Tooltip.module.scss';
import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

const Tooltip = ({
  placement,
  show,
  className,
  children,
  heading,
  content,
  icon,
}) => {
  return (
    <>
      <OverlayTrigger
        placement={placement ? 'left' : 'auto'}
        show={show}
        overlay={
          <BootstrapTooltip className={`${styles.tooltip} ${className || ''}`}>
            <>
              {children || (
                <>
                  <h4>{heading}</h4>
                  <p>{content}</p>
                </>
              )}
            </>
          </BootstrapTooltip>
        }
      >
        <span className={styles.tooltip_icon}>{icon || <InfoIcon />}</span>
      </OverlayTrigger>
    </>
  );
};

export default Tooltip;
