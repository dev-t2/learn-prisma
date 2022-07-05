import React, { FC, memo } from 'react';
import styled from '@emotion/native';

interface IStyledBox {
  borderRadius: number;
}

const StyledBox = styled.View<IStyledBox>(({ borderRadius }) => ({
  width: 64,
  height: 64,
  backgroundColor: 'black',
  borderRadius,
}));

interface IBox {
  borderRadius?: number;
}

const Box: FC<IBox> = ({ borderRadius = 0 }) => {
  return <StyledBox borderRadius={borderRadius} />;
};

export default memo(Box);
