import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const StyledText = styled.Text({
  fontSize: 30,
});

const Channel = () => {
  return (
    <Container>
      <StyledText>Channel</StyledText>
    </Container>
  );
};

export default memo(Channel);
