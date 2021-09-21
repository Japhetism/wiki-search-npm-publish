import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

/**
 * UI component for search input
 */
export const Search = ({ placeholder, onChange, onKeyUp, ...props }) => {
  return (
    <input
      type="search"
      className="storybook-search"
      {...props}
      placeholder={placeholder}
      onChange={event => onChange(event.target.value)}
      onKeyUp={event => onKeyUp(event)}
    />
  );
};

Search.propTypes = {
  /*
   * Placeholder holder for search input
   */
  placeholder: PropTypes.string,
  /**
   * onChange handler
   */
   onChange: PropTypes.func,
  /**
   * onkeyUp handler
   */
  onKeyUp: PropTypes.func,
};

Search.defaultProps = {
  placeholder: 'Search for pages containing foo',
};
