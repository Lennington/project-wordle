import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ id, guess, answer }) {
  const guessResults = checkGuess(guess, answer);

  return <>
    <p key={id} className="guess">
      { 
        range(5).map((num) => (
            guess
            ? <span key={num} className={`cell ${guessResults[num].status}`}>{guess.charAt(num)}</span> 
            : <span key={num} className="cell"></span>
        ))
      }
    </p>
  </>;
}

export default Guess;
