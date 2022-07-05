import React, { FC, memo } from 'react';
import { ViewStyle } from 'react-native';
import styled from '@emotion/native';

type Size = 'small' | 'medium' | 'large';

interface IStyledBox {
  size: Size;
  borderRadius: number;
}

const StyledBox = styled.View<IStyledBox>(({ size, borderRadius }) => {
  const medium: ViewStyle = { width: 64, height: 64, backgroundColor: 'black', borderRadius };

  if (size === 'small') {
    return { ...medium, width: 32, height: 32 };
  }

  if (size === 'large') {
    return { ...medium, width: 128, height: 128 };
  }

  return medium;
});

interface IBox {
  size?: Size;
  borderRadius?: number;
}

const Box: FC<IBox> = ({ size = 'medium', borderRadius = 0 }) => {
  return <StyledBox size={size} borderRadius={borderRadius} />;
};

export default memo(Box);
