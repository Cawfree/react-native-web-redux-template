import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import firebase from 'react-native-firebase';

import { Root, StyleProvider } from 'native-base';

import Routes from './routes/index';

import configureStore from './../../configureStore';

const someStyle = {
  
};

const { persistor, store } = configureStore();

if (Platform.OS === 'android') StatusBar.setHidden(true);

export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.shape({}).isRequired,
    persistor: PropTypes.shape({}).isRequired,
  }

  state = { loading: true }

  async componentWillMount() {
    //await Font.loadAsync({
    //  Roboto: require('native-base/Fonts/Roboto.ttf'),
    //  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    //  Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    //});

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    //if (loading) return <Loading />;

          //<PersistGate loading={<Loading />} persistor={persistor}>
    return (
      <Root>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StyleProvider style={{
              primaryColor: 'red',
            }}>
              <Router>
                <Stack key="root">
                  {Routes}
                </Stack>
              </Router>
            </StyleProvider>
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
