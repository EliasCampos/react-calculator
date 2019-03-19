import React from 'react';

function Point({add, isClicked}) {
  return (
    <button className="point" disabled={ isClicked } onClick={ add }>
    .
    </button>
  );
}

export default Point;
