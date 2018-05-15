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

  // TODO transition response between calculating (bouncing input)
  handleInput = sentence => {
    if (!this.state.pangrammatron) {
      this.setState({ pangramAnswer: 'still loading ...' });
    } else {
      this.setState({
        sentence,
        pangramAnswer: this.state.pangrammatron.isPangram(sentence),
        panphoneAnswer: this.state.pangrammatron.isPanphone(sentence)
      });
    }
  }

  componentDidMount() {
    if (!this.state.pangrammatron) {
      const phones = new PhonesDictionary();
      const pangrammatron = new Pangrammatron('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      pangrammatron.initialize(phones.gatherPhones, phones.gatherEntries)
        .then(() => this.setState({ pangrammatron }));
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
