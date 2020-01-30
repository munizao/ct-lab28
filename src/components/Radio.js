import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ method }) => (<label><input type="radio" name="method" value={method} />{method}</label>);

Radio.propTypes = {
  method: PropTypes.string.isRequired
};

export default Radio;
