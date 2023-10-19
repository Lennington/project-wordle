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
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guessInput) {
    console.info({ guessInput });
    setGuesses([...guesses, guessInput]);
  }

  return <>
    <Guesses 
      guesses={guesses} 
      answer={answer}
    />
    <GuessInput
      handleGuess={handleGuess}
    />
  </>;
}

export default Game;
