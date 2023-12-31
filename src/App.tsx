import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import AppRouter from './components/AppRouter/AppRouter.component';
import FullScreenSpinner from './components/FullScreenSpinner/FullScreenSpinner.component';
import { ToastContainer } from 'react-toastify';
import { useCheckUserSessionQuery } from './redux/auth/auth.api';

function App() {
  library.add(fas)
  const Content = FullScreenSpinner(AppRouter)
  const { isLoading } = useCheckUserSessionQuery(undefined);
  
  return (
    <>
      <Content isLoading={isLoading} />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
