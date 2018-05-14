import React from 'react';
import { PropTypes } from 'prop-types';

const InputSentence = ({ sentence, handleInput }) => {
  return (
    <div className="input-container">
      <input
        className="input-sentence"
        type="text" value={sentence}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
}

export default InputSentence;
