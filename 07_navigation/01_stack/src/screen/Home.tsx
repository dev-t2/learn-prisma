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

const Home = () => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      <Button>List</Button>
    </Container>
  );
};

export default memo(Home);
