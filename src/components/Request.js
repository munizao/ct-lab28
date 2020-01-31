import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import styles from './Request.css';
import Radio from './Radio';

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

const Request = ({ url, resultText, selectedMethod, bodyTextareaDisabled, onBodyChange, onGoClick, onRadioChange, onInputChange }) => {
  return (
    <div>
      <input className={styles.UrlInput} type="text" onChange={onInputChange} placeholder="Enter API URL here." value={url} />
      <div className={styles.RadioBar}>
        {methods.map((method, i) => <Radio key={i} method={method} onChange={onRadioChange} selectedMethod={selectedMethod} />)}
        <button onClick={onGoClick}>Go</button>
      </div>
      <textarea className={styles.BodyArea} onChange={onBodyChange} disabled={bodyTextareaDisabled}/>
      {resultText && <ReactJson src={JSON.parse(resultText)} />}
    </div>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  selectedMethod: PropTypes.string.isRequired,
  bodyTextareaDisabled: PropTypes.bool.isRequired,
  onGoClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired, 
  onBodyChange: PropTypes.func.isRequired,
  resultText: PropTypes.string.isRequired
};

export default Request;


