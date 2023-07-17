import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import AppRouter from './components/AppRouter/AppRouter.component';
import FullScreenSpinner from './components/FullScreenSpinner/FullScreenSpinner.component';

function App() {
  library.add(fas)
  const Content = FullScreenSpinner(AppRouter)
  const isLoading = false;
  return (
    <>
      <Content isLoading={isLoading} />
    </>
  );
}

export default App;
