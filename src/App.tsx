import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function App() {
  library.add(faHandHoldingHeart)
  return (
    <>
      <h1>Hello</h1>
      <FontAwesomeIcon icon={["fas", "hand-holding-heart"]} />
    </>
  );
}

export default App;
