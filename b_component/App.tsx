/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useCallback, useState } from 'react';
import { Button, SafeAreaView } from 'react-native';

import { Box } from './src/components';

const App = () => {
  const [visible, setVisible] = useState(true);

  const onPress = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  return (
    <SafeAreaView>
      <Button title="Toggle" onPress={onPress} />

      {visible && <Box size="large" backgroundColor="blue" borderRadius={16} />}
    </SafeAreaView>
  );
};

export default memo(App);
