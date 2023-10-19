import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

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
    setGuesses([...guesses, guessInput]);

    if(guessInput === answer) {
      setGameStatus({
        gameOver: true,
        hasWon: true
      });
    } else if (guesses.length === 5) {
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
