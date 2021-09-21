import React, { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text(({ theme }) => ({
  width: '100%',
  height: 20,
  alignItems: 'flex-start',
  color: theme.error,
  marginBottom: 10,
}));

interface IErrorMessage {
  children: ReactNode;
}

const ErrorMessage: FC<IErrorMessage> = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default memo(ErrorMessage);
