import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from '../Guess';

function Guesses({ guesses, answer }) {

  return <>
    <div className="guess-results">
    { 
      range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key = {num}
          id = {num}
          guess = {guesses[num]}
          answer = {answer}
        />
      ))
    }
    </div>
  </>;
}

export default Guesses;
