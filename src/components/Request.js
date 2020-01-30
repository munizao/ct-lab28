import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';
import Radio from './Radio';
import Response from './Response';

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

const Request = ({ url, resultText, selectedMethod, onGoClick, onRadioChange, onInputChange }) => {
  return (
    <div>
      <input type="text" onChange={onInputChange} placeholder="Enter API URL here." value={url} />
      <div className={styles.Request}>
        {methods.map((method, i) => <Radio key={i} method={method} onChange={onRadioChange} selectedMethod={selectedMethod} />)}
      </div>
      <button onClick={onGoClick}>Go</button>
      <Response text={resultText}/>
    </div>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  selectedMethod: PropTypes.string.isRequired,
  onGoClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired, 
  resultText: PropTypes.string.isRequired
};

export default Request;


