import React from 'react';
import History from './History';
import Request from './Request';
export default class Main extends React.Component {
  state = {
    url: '',
    method: 'GET',
    resultText: '',
    bodyToSend: '',
    bodyToSendDisabled: false
  }

  handleRadioChange = ({ target }) => {
    this.setState((state) => {
      return { ...state, method:target.value };
    });
  }

  handleGoClick = () => {
    const options = { method: this.state.method };
    if(['PUT', 'POST', 'PATCH'].includes(this.state.method)) {
      options.body = this.state.bodyToSend;
    }
    fetch(this.state.url, options)
      .then((res) => res.text())
      .then((text) => {
        this.setState((state) => {
          return { ...state, resultText:text };    
        });
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
        <Request resultText={this.state.resultText} url={this.state.url} selectedMethod={this.state.method} onInputChange={this.handleInputChange} onRadioChange={this.handleRadioChange} onGoClick={this.handleGoClick}/>
      </main>
    );
  }
}
