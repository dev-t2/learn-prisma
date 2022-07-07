import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledImage = styled.Image({
  width: 240,
  height: 180,
  marginBottom: 16,
});

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.disabled,
}));

const Empty = () => {
  return (
    <Container>
      <StyledImage
        source={require('../../../assets/images/young_and_happy.png')}
        resizeMode="contain"
      />

      <StyledText>해야 할 일이 없습니다 😎</StyledText>
    </Container>
  );
};

export default memo(Empty);
