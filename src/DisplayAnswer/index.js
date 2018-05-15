import React from 'react';
import { PropTypes } from 'prop-types';

const DisplayAnswer = ({ sentence, pangramAnswer, panphoneAnswer }) => (
  <div className="answer-container">
    {sentence && (
      <div>
        <p>Your sentence { pangramAnswer === true ? 'is a pangram' : 'is not a pangram' }</p>
        <p>Your sentence { panphoneAnswer === true ? 'is a panphone' : 'is not a panphone' }</p>
      </div>
    )}
  </div>
);

export default DisplayAnswer;
