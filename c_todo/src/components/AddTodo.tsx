import styled from '@emotion/native';
import React, { memo } from 'react';

const Container = styled.View({
  height: 64,
  backgroundColor: 'red',
});

const AddTodo = () => {
  return <Container />;
};

export default memo(AddTodo);
