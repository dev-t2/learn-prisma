import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  marginTop: 40,
  marginBottom: 10,
});

const StyledText = styled.Text(({ theme }) => ({
  fontSize: 40,
  fontWeight: 'bold',
  color: theme.text,
}));

interface ITitle {
  children: ReactNode;
}

const Title: FC<ITitle> = ({ children }) => {
  return (
    <Container>
      <StyledText>{children}</StyledText>
    </Container>
  );
};

export default memo(Title);
