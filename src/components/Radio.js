import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.css';

const Radio = ({ method, onChange }) => (
  <>
    <input id={method} onChange={onChange} type="radio" name="method" value={method} />
    <label htmlFor={method} className={styles.Radio}>{method}</label>
  </>);
Radio.propTypes = {
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
