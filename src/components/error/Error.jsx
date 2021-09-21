import React from 'react';
import PropTypes from 'prop-types';
import './error.css';

/**
 * UI component for error
 */
export const Error = ({ text, ...props }) => {
  return (
    <p className="storybook-error-content">{text}</p>
  );
};

Error.propTypes = {
  /*
   * error text to display
   */
  text: PropTypes.string.isRequired,
};

Error.defaultProps = {
  text: 'An error occurred.',
};
