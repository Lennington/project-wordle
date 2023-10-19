import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guesses from '../Guesses';
import GuessInput from '../GuessInput';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({
    gameOver: false,
    hasWon: false
  });

  function handleGuess(guessInput) {
    const nextSetGuesses = [...guesses, guessInput];
    setGuesses(nextSetGuesses);

    if(guessInput === answer) {
      setGameStatus({
        gameOver: true,
        hasWon: true
      });
    } else if (nextSetGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus({
        ...gameStatus,
        gameOver: true
      });
    }

  }

  return <>
    <Guesses 
      guesses={guesses} 
      answer={answer}
    />
    <GuessInput
      handleGuess={handleGuess}
      gameOver={gameStatus.gameOver}
    />
    {gameStatus.gameOver
      &&  <Banner 
            hasWon={gameStatus.hasWon}
            numOfGuesses={guesses.length}
            answer={answer}
          />
    }
  </>;
}

export default Game;
