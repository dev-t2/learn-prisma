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

const PressableContainer = styled.View({
  flexDirection: 'row',
  marginTop: 8,
});

const StyledPressable = styled.Pressable({
  paddingHorizontal: 8,
});

const DetailScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();

  const navigation = useNavigation<RootStackNavigationProp>();

  const onNext = useCallback(() => {
    navigation.push('Detail', { id: params.id + 1 });
  }, [navigation, params.id]);

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  const onHome = useCallback(() => {
    navigation.popToTop();
  }, [navigation]);

  return (
    <Container>
      <StyledText>ID: {params.id}</StyledText>

      <PressableContainer>
        <StyledPressable onPress={onNext}>
          <StyledText>Next</StyledText>
        </StyledPressable>

        <StyledPressable onPress={onBack}>
          <StyledText>Back</StyledText>
        </StyledPressable>

        <StyledPressable onPress={onHome}>
          <StyledText>Home</StyledText>
        </StyledPressable>
      </PressableContainer>
    </Container>
  );
};

export default memo(DetailScreen);
