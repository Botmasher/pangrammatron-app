import React, { Component } from 'react';
import InputSentence from './InputSentence';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      sentence: ''
    };
  }

  handleInput = sentence => this.setState({ sentence });

  handleSubmit = () => console.log(this.state.sentence);

  render() {
    return (
      <div className="App">
        <h1>Pangrammatron</h1>
        <InputSentence
          sentence={sentence}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
