import React, { memo, useCallback } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { HomeScreenNavigationProp } from '../navigation/Stack';
import { Button } from '../components';

interface IContainer {
  safeAreaInsets: EdgeInsets;
}

const Container = styled.View<IContainer>(({ safeAreaInsets }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: safeAreaInsets.top,
  paddingRight: safeAreaInsets.right,
  paddingBottom: safeAreaInsets.bottom,
  paddingLeft: safeAreaInsets.left,
}));

const StyledText = styled.Text({
  fontSize: 30,
  margin: 10,
});

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const safeAreaInsets = useSafeAreaInsets();

  const onPress = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  return (
    <Container safeAreaInsets={safeAreaInsets}>
      <StyledText>Home</StyledText>

      <Button onPress={onPress}>List</Button>
    </Container>
  );
};

export default memo(Home);
