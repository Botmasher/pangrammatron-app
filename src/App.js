import React, { Component } from 'react';
import InputSentence from './InputSentence';
import DisplayAnswer from './DisplayAnswer';
import { Pangrammatron } from './utils/pangrammatron';
import { PhonesDictionary } from './utils/pangrammatron/cmu-api';
import { readPhones, readEntries } from './actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      sentence: '',
      pangramAnswer: false,
      panphoneAnswer: false,
      pangrammatron: null,
      phones: [],
      dictionary: {}
    };
  }

  // TODO move pangrammatron to tools and just dispatch actions here
  handleInput = sentence => {
    if (!this.state.phones || !this.state.dictionary) {
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
        .then(() => {
          this.setState({ pangrammatron }, () => {
            this.props.readPhones(this.state.pangrammatron);
            this.props.readEntries(this.state.pangrammatron);
          });
        });
    } else {
      this.props.readPhones(this.state.pangrammatron);
      this.props.readEntries(this.state.pangrammatron);
    }
  }

  render() {
    const { sentence, pangramAnswer, panphoneAnswer } = this.state;
    const { phones, entries } = this.props;
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

const mapStateToProps = ({ phones, entries }) => ({
	phones,
  entries
});

const mapDispatchToProps = dispatch => ({
  readPhones: pangrammatron => dispatch(readPhones(pangrammatron)),
  readEntries: pangrammatron => dispatch(readEntries(pangrammatron))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
