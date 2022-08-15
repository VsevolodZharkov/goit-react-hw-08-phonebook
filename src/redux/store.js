import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import  contactsReduser  from './Contacts/contacts-reducers.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
	reducer: {
		auth: persistedReducer,
    contacts: contactsReduser,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

});

export const persistor = persistStore(store);