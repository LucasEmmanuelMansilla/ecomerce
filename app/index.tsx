import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import RootNavigator from './navigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './redux/root';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested',
      "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
      'new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method',
      'new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
      'The action "CLOSE_DRAWER" was not handled by any navigator',
      'Warning: Failed prop type: The prop `subtitle` is marked as required in `Page`, but its value is `null`',
    ]);
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
