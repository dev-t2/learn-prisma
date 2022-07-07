import React, { memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  height: 64,
  backgroundColor: theme.colors.primary,
}));

const AddTodo = () => {
  return <Container />;
};

export default memo(AddTodo);
