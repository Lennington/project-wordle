import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guesses from '../Guesses';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  return <>
    <Guesses guesses={guesses}/>
    <GuessInput
      guess={guess}
      setGuess={setGuess}
      guesses={guesses}
      setGuesses={setGuesses}
    />
  </>;
}

export default Game;
