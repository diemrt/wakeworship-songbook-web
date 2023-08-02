import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from './api';
import { rtkQueryErrorLogger } from './middlewares/errorHandler.middleware';
import { rtkQuerySuccessLogger } from './middlewares/successHandler.middleware';
import authReducer from './auth/auth.reducer';

let middlewares = [rtkQueryErrorLogger, rtkQuerySuccessLogger]

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer
  },  
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware, ...middlewares)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;