import { AppRegistry } from 'react-native';

import App from './src/__runtime/native/index';

AppRegistry.registerComponent(
  'RNWebStarter',
  // TODO: Should use react-native-code-push.
  () => App,
);
