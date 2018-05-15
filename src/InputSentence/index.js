import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import { PropTypes } from 'prop-types';

const InputSentence = ({ sentence, handleInput }) => {
  return (
    <div className="input-container">
        <DebounceInput
          className="input-sentence"
          element="textarea"
          value={sentence}
          minLength={1}
          debounceTimeout={600}
          onChange={(e) => handleInput(e.target.value)}
        />
    </div>
  );
}

InputSentence.propTypes = {
  sentence: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default InputSentence;
