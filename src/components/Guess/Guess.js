import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const guessResults = checkGuess(guess, answer);

  return <>
    <p className="guess">
      { 
        range(5).map((num) => (
          guessResults
            ? <span key={num} className={`cell ${guessResults[num].status}`}>{guessResults[num].letter}</span> 
            : <span key={num} className="cell"></span>
        ))
      }
    </p>
  </>;
}

export default Guess;
