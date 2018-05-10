import React, { Component } from 'react';
import InputSentence from './InputSentence';
import DisplayAnswer from './DisplayAnswer';
import './App.css';
import { Pangrammatron } from './utils/pangrammatron';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      sentence: '',
      pangramAnswer: false,
      panphoneAnswer: false,
      pangrammatron: null
    };
  }

  handleInput = sentence => {
    this.setState({ sentence }, () => {

    });
  }

  handleSubmit = () => {
    console.log(this.state.sentence);
  }

  componentDidMount() {
    !this.state.pangrammatron && (

    );
  }

  render() {
    const { sentence, pangramAnswer, panphoneAnswer } = this.state;
    return (
      <div className="App">
        <h1>Pangrammatron</h1>
        <InputSentence
          sentence={sentence}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <DisplayAnswer
          sentence={sentence}
          pangramAnswer={pangramAnswer}
          panphoneAnswer={panphoneAnswer}
        />
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
