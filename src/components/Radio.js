import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ method, onChange }) => (<label><input onChange={onChange} type="radio" name="method" value={method} />{method}</label>);

Radio.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
