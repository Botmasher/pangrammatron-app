import React, { Component } from 'react';
import InputSentence from './InputSentence';
import DisplayAnswer from './DisplayAnswer';
import { Pangrammatron } from './utils/pangrammatron';
import { PhonesDictionary } from './utils/pangrammatron/cmu-api';
import './App.css';

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
      //console.log(this.state.pangrammatron.isPangram(sentence));
      //console.log(this.state.pangrammatron.isPanphone(sentence));
    });
  }

  handleSubmit = () => {
    console.log(this.state.sentence);
  }

  componentDidMount() {
    const phones = new PhonesDictionary();
    phones.gatherPhones()
      .then(phones => console.log(phones))
      .then(() => {
        phones.gatherEntries().then(entries => console.log(entries['DON\'T']));
      });
    if (!this.state.pangrammatron) {
      //const pangrammatron = new Pangrammatron(alphabet='abcdefghijklmnopqrstuvwxyz', inventory=phones, dictionary=dict, language='en');
      //console.log(phones);
      //this.setState({ pangrammatron });
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
