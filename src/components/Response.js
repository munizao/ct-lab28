import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ text }) => (<p>{text}</p>);

Response.propTypes = {
  text: PropTypes.string.isRequired
};

export default Response;
