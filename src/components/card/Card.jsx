import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import DefaultLogo from '../../assets/images/logo.png';

/**
 * UI component for card
 */
export const Card = ({ title, description, thumbnail, ...props }) => {

  return (
    <div className="storybook-div">
      <div className="storybook-thumbnail">
        <img src={thumbnail ? thumbnail.url : DefaultLogo} alt="image" />
      </div>
      <div className="storybook-info">
        <div className="storybook-title">{title}</div>
        <div className="storybook-description">{description}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * Title for the card
   */
  title: PropTypes.string,
  /**
   * Description for the card
   */
   description: PropTypes.string,
};

Card.defaultProps = {
  title: "Lorem Ipsum",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};
