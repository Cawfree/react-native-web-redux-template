/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import firebase from 'firebase';

import configureStore from './../../configureStore';

import * as serviceWorker from './register-service-worker';
import Routes from './routes/index';

//// Components
//import Loading from './components/UI/Loading';

// Load css
import './styles/style.scss';

const { persistor, store } = configureStore();

// persistor.purge(); // Debug to clear persist

    //<PersistGate loading={<Loading />} persistor={persistor}>
const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
