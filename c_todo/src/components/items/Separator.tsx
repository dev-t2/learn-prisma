import styled from '@emotion/native';
import React, { memo } from 'react';

const Container = styled.View(({ theme }) => ({
  height: 1,
  backgroundColor: theme.colors.separator,
}));

const Separator = () => {
  return <Container />;
};

export default memo(Separator);
