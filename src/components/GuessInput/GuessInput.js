import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return <>
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.info({ guess });
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess (exactly 5 characters):</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess}
        minLength="5"
        maxLength="5"
        pattern="\d{5,5}"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  </>;
}

export default GuessInput;
