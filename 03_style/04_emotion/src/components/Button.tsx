import styled from '@emotion/native';
import React, { FC, memo } from 'react';

interface IContainer {
  title: string;
}

const Container = styled.Pressable<IContainer>(({ title }) => ({
  backgroundColor: title === 'React Native' ? '#9b59b6' : '#3498db',
  borderRadius: 15,
  paddingVertical: 15,
  paddingHorizontal: 40,
  marginVertical: 10,
}));

const Title = styled.Text({
  fontSize: 20,
  fontWeight: '600',
  color: '#fff',
});

interface IButton {
  title: string;
}

const Button: FC<IButton> = ({ title }) => {
  return (
    <Container title={title}>
      <Title>{title}</Title>
    </Container>
  );
};

export default memo(Button);
