import React from 'react';
import { PropTypes } from 'prop-types';

const DisplayAnswer = ({ sentence, pangramAnswer, panphoneAnswer }) => (
  <div className="answer-container">
    {sentence && (
      <div>
        <p>{ pangramAnswer === true ? 'is a pangram' : 'is not a pangram' }</p>
        <p>{ panphoneAnswer === true ? 'is a panpone' : 'is not a panphone' }</p>
      </div>
    )}
  </div>
);

export default DisplayAnswer;
