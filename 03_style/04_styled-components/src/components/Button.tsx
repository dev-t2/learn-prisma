import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

const Container = styled.Pressable({
  backgroundColor: '#9b59b6',
  borderRadius: 15,
  paddingVertical: 15,
  paddingHorizontal: 40,
  marginVertical: 10,
});

const StyledText = styled.Text({
  fontSize: 20,
  fontWeight: 600,
  color: '#fff',
});

interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return (
    <Container>
      <StyledText>{title}</StyledText>
    </Container>
  );
};

export default memo(Button);
