import React from 'react';

function GuessInput({ guess, setGuess, guesses, setGuesses }) {

  return <>
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        const newGuess = {
          id: crypto.randomUUID(),
          guess: guess
        }
        const nextGuesses = [...guesses, newGuess];
        
        console.info({ newGuess });
        setGuesses(nextGuesses);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  </>;
}

export default GuessInput;
