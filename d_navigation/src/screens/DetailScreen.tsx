import React, { memo, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from '@emotion/native';

import { DetailScreenRouteProp, RootStackNavigationProp } from '../RootStack';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 24,
});

const StyledPressable = styled.Pressable({
  marginTop: 8,
});

const DetailScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();

  const navigation = useNavigation<RootStackNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Detail', { id: params.id + 1 });
  }, [navigation, params.id]);

  return (
    <Container>
      <StyledText>ID: {params.id}</StyledText>

      <StyledPressable onPress={onPress}>
        <StyledText>Next Screen</StyledText>
      </StyledPressable>
    </Container>
  );
};

export default memo(DetailScreen);
