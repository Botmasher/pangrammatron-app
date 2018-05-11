import React, { Component } from 'react';
import InputSentence from './InputSentence';
import DisplayAnswer from './DisplayAnswer';
import './App.css';

// TODO load Pangrammatron outside App
import { Pangrammatron } from './utils/pangrammatron';
import PhonesDictionary from './utils/pangrammatron/cmu-api';

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
    if (!this.state.pangrammatron) {
      this.setState({ pangramAnswer: 'still loading ...' });
      return;
    }
    this.setState({ sentence }, () => {
      console.log(this.state.pangrammatron.isPangram(sentence));
      console.log(this.state.pangrammatron.isPanphone(sentence));
    });
  }

  handleSubmit = () => {
    console.log(this.state.sentence);
  }

  componentDidMount() {
    if (!this.state.pangrammatron) {
      const cmu = new PhonesDictionary();
      const pan = new Pangrammatron();
      pan.initialize(() => cmu.gatherPhones(), () => cmu.gatherEntries())
        .then(() => this.setState({ pangrammatron: pan }));
    }
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
