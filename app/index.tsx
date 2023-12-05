import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import RootNavigator from './navigation';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
