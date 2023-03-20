import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth.slice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { modalReducer } from './modalSlice';

const contactPersistConfig = {
  key: 'contacts',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactReducer),
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const presistor = persistStore(store);
