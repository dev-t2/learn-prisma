import React, { memo } from 'react';
import styled from '@emotion/native';

const StyledBox = styled.View({
  width: 64,
  height: 64,
  backgroundColor: 'black',
});

const Box = () => {
  return <StyledBox />;
};

export default memo(Box);
