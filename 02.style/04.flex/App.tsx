import React, { memo, useCallback } from 'react';
import { Alert, Platform, StatusBar } from 'react-native';
import { Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { BottomBar, Content, TopBar } from './src/screens';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
});

const StyledView = styled.View({
  backgroundColor: Colors.purple900,
  position: 'absolute',
  right: 30,
  bottom: Platform.select({ ios: 100, android: 80 }),
  padding: 10,
  borderRadius: 36,
});

const App = () => {
  const onPress = useCallback(() => Alert.alert('Icon Pressed'), []);

  return (
    <>
      <StyledSafeAreaView>
        <StatusBar />

        <TopBar />
        <Content />
        <BottomBar />
      </StyledSafeAreaView>

      <StyledView>
        <MaterialCommunityIcons
          name="feather"
          size={50}
          color="#ffffff"
          onPress={onPress}
        />
      </StyledView>
    </>
  );
};

export default memo(App);
