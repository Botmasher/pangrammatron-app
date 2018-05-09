import React from 'react';
import { PropTypes } from 'prop-types';

const InputSentence = ({ sentence, handleInput, handleSubmit }) => {
  return (
    <div className="input-container">
      <input
        className="input-sentence"
        type="text" value={sentence}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className="input-test-btn" onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default InputSentence;
