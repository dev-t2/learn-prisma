import React, { FC, memo } from 'react';
import styled from '@emotion/native';

interface IContainer {
  title: string;
}

const Container = styled.Pressable<IContainer>(({ theme, title }) => ({
  backgroundColor: title === 'React Native' ? theme.purple : theme.blue,
  borderRadius: 15,
  paddingVertical: 15,
  paddingHorizontal: 40,
  marginVertical: 10,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 20,
  fontWeight: '600',
  color: theme.text,
}));

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
