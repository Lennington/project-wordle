import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ id, guess, answer }) {
  const guessResults = checkGuess(guess, answer);

  return <>
    <p key={id} id={id} className="guess">
      { 
        range(5).map((num) => (
            guess
            ? <span key={num} id={num} className={`cell ${guessResults[num].status}`}>{guess.charAt(num)}</span> 
            : <span key={num} id={num} className="cell"></span>
        ))
      }
    </p>
  </>;
}

export default Guess;
