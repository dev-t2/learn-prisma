import React, { memo } from 'react';
import { useRoute } from '@react-navigation/native';
import styled from '@emotion/native';

import { ChannelScreenRouteProp } from '../navigation/Main';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const StyledText = styled.Text({
  fontSize: 30,
});

const Channel = () => {
  const { params } = useRoute<ChannelScreenRouteProp>();

  return (
    <Container>
      <StyledText>Channel</StyledText>
      <StyledText>{params.id}</StyledText>
      <StyledText>{params.title}</StyledText>
    </Container>
  );
};

export default memo(Channel);
