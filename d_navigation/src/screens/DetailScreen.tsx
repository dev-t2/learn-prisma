import React, { memo } from 'react';
import { Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styled from '@emotion/native';

import { DetailScreenRouteProp } from '../RootStack';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 32,
});

const DetailScreen = () => {
  const { params } = useRoute<DetailScreenRouteProp>();

  return (
    <Container>
      <Pressable>
        <StyledText>ID: {params.id}</StyledText>
      </Pressable>
    </Container>
  );
};

export default memo(DetailScreen);
