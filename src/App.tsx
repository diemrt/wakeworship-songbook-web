import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FullScreenSpinner from './components/FullScreenSpinner/FullScreenSpinner.component';

function App() {
  library.add(faHandHoldingHeart)
  return (
    <FullScreenSpinner />
  );
}

export default App;
