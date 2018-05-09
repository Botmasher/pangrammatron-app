import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      sentence: ''
    };
  }

  handleInput = e => this.setState({ sentence: e.target.value });

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.sentence} onChange={this.handleInput} />
      </div>
    );
  }
}

export default App;
