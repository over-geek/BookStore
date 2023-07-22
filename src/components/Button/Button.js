import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({
  defaultProps = false, name, btnStyle, onClick,
}) => (
  <>
    {
      defaultProps
        ? <button type="submit" style={btnStyle} onClick={onClick}>{name}</button>
        : <button type="button" style={btnStyle} onClick={onClick}>{name}</button>
    }
  </>
);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  btnStyle: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  defaultProps: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
