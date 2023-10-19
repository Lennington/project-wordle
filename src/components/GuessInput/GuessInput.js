import React from 'react';

function GuessInput({ handleGuess, gameOver }) {
  const [guessInput, setGuessInput] = React.useState('');

  return <>
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guessInput)
        setGuessInput('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        disabled={gameOver}
        value={guessInput}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setGuessInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  </>;
}

export default GuessInput;
