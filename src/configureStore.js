import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunkMiddleware from 'redux-thunk';

import api from './api';

import dashboard from './__runtime/native/dashboard';

import landing from './__runtime/web/landing';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

const configureStore = () => {
  
  // TODO: check to ensure the runtime is provider

  const reducer = persistCombineReducers(
    {
      key: 'root',
      storage,
      whitelist: [],
    },
    {
      rehydrated,
      api,
      dashboard,
      landing,
    },
  );

  // Allows us to use redux devtools when it exists
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancer(
      applyMiddleware(
        thunkMiddleware,
      ),
    ),
  );

  const persistor = persistStore(
    store,
    null,
    () => {
      store.getState();
    },
  );

  return {
    persistor,
    store,
  };

};

export default configureStore;
