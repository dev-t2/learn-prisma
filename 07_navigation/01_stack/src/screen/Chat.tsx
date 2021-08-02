import React, { memo } from 'react';
import styled from '@emotion/native';

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

const Chat = () => {
  return (
    <Container>
      <StyledText>Chat</StyledText>
      <Button>Home</Button>
    </Container>
  );
};

export default memo(Chat);
