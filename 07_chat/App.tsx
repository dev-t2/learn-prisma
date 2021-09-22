import React, { memo, useCallback, useState } from 'react';
import { Alert } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@emotion/react';

import { theme } from './src/emotion';
import Navigation from './src/navigation';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const startAsync = useCallback(async () => {
    await Promise.all<any>([]);
  }, []);

  const onFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  const onError = useCallback((error: Error) => {
    Alert.alert(error.message);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isReady ? (
        <AppLoading
          startAsync={startAsync}
          onFinish={onFinish}
          onError={onError}
        />
      ) : (
        <>
          <StatusBar style="auto" />

          <Navigation />
        </>
      )}
    </ThemeProvider>
  );
};

export default memo(App);
