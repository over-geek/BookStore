import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ name }) => (
  <button type="button">{name}</button>
);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
