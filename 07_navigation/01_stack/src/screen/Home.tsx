import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { HomeScreenNavigationProp } from '../navigation/Stack';
import { Button } from '../components';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  margin: 10,
});

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  return (
    <Container>
      <StyledText>Home</StyledText>

      <Button onPress={onPress}>List</Button>
    </Container>
  );
};

export default memo(Home);
