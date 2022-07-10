import React, { memo, useCallback, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from '@emotion/native';

import { DetailScreenRouteProp, RootStackNavigationProp } from '../RootStack';

const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledPressable = styled.Pressable({
  paddingHorizontal: 8,
});

const StyledText = styled.Text({
  fontSize: 24,
});

const DetailScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();

  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    navigation.setOptions({ title: `Detail Screen - ${params.id}` });
  }, [navigation, params.id]);

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
      <StyledPressable onPress={onNext}>
        <StyledText>Next</StyledText>
      </StyledPressable>

      <StyledPressable onPress={onBack}>
        <StyledText>Back</StyledText>
      </StyledPressable>

      <StyledPressable onPress={onHome}>
        <StyledText>Home</StyledText>
      </StyledPressable>
    </Container>
  );
};

export default memo(DetailScreen);
