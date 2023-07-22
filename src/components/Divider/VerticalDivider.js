import React from 'react';
import { PropTypes } from 'prop-types';

const VerticalDivider = ({ type }) => (
  <div
    style={{
      width: '2px',
      height: type ? '24px' : '70px',
      backgroundColor: '#e8e8e8',
    }}
  />
);

VerticalDivider.propTypes = {
  type: PropTypes.bool.isRequired,
};

export default VerticalDivider;
