import React from 'react';
import { PropTypes } from 'prop-types';

const DisplayAnswer = ({ sentence, pangramAnswer, panphoneAnswer }) => (
  <div className="answer-container">
    {sentence
      ? <div>
          <p className="answer-pangram" key={`${sentence}-pangram`}>Your sentence { pangramAnswer === true ? 'is a pangram' : 'is not a pangram' }</p>
          <p className="answer-panphone" key={`${sentence}-panphone`}>Your sentence { panphoneAnswer === true ? 'is a panphone' : 'is not a panphone' }</p>
        </div>
      : <div>
          <p>Enter an alphabetic or phonetic <a href="https://en.wikipedia.org/wiki/Pangram" target="_new">pangram</a></p>
          <p>Stuck? Try: The quick brown fox jumps over the lazy dog.</p>
        </div>
    }
  </div>
);

DisplayAnswer.propTypes = {
  sentence: PropTypes.string,
  pangramAnswer: PropTypes.bool.isRequired,
  panphoneAnswer: PropTypes.bool.isRequired
};

export default DisplayAnswer;
