import React from 'react';
import PropTypes from 'prop-types';

import styles from './History.css';


const History = ({ history }) => {
  return (
    <div className={styles.History}>
      <h2>History</h2>
      <ul>
        {history.map((historyItem, i) => {
          return (
            <li key={i}>
              <span className={styles.Method}>
                {historyItem.method}
              </span> 
              <span className={styles.Url}>
                {historyItem.url}
              </span>
            </li>);
        })}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
};

export default History;
