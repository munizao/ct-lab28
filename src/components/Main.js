import React from 'react';
import History from './History';
import Request from './Request';
export default class Main extends React.Component {
  state = {
    url: '',
    method: 'GET',
    resultText: ''
  }

  handleGoClick = () => {
    fetch(this.state.url, { method: this.state.method })
      .then((res) => res.json())
      .then((json) => {
        console.log('result json', json);
      });
  }
 
  handleInputChange = ({ target }) => {
    this.setState((state) => {
      return { ...state, url:target.value };
    });
  }

  render() {
    return (
      <main>
        <History />
        <Request resultText={this.state.resultText} url={this.state.url} selectedMethod={this.state.method} onInputChange={this.handleInputChange} onGoClick={this.handleGoClick}/>
      </main>
    );
  }
}
