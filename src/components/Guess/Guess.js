import React from 'react';

import { range } from '../../utils';

function Guess({ id, guess }) {

  return <>
    <p key={id} className="guess">
      { 
        range(5).map((num) => (
          <span key={num} className="cell">
            {
              guess
              ? guess.charAt(num)
              : ""
            }
          </span>
        ))
      }
    </p>
  </>;
}

export default Guess;
