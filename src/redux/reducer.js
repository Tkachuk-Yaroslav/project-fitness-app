import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './appState/slice';
import { authReducer } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { headerReducer } from './error/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = combineReducers({
  appState: appReducer,
  auth: authPersistedReducer,
  header: headerReducer,
});
