import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor = 'blue',
  label = '',
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
     primary: PropTypes.bool,
     backgroundColor: PropTypes.string,
     size: PropTypes.oneOf(['small',  'medium',  'large']).isRequired,
     label: PropTypes.string.isRequired,
     onClick: PropTypes.func,
};