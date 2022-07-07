import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 24,
  color: theme.colors.disabled,
}));

const Empty = () => {
  return (
    <Container>
      <StyledText>할 일이 없습니다</StyledText>
    </Container>
  );
};

export default memo(Empty);
