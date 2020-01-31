import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.css';

const Radio = ({ selectedMethod, method, onChange }) => (
  <>
    <input id={method} 
      onChange={onChange} 
      type="radio" 
      name="method" 
      value={method} 
      checked={selectedMethod === method} />
    <label htmlFor={method} className={styles.Radio}>{method}</label>
  </>);
Radio.propTypes = {
  method: PropTypes.string.isRequired,
  selectedMethod: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
