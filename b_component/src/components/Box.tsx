import React, { FC, memo } from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import styled from '@emotion/native';

type Size = 'small' | 'medium' | 'large';

interface IStyledBox {
  size: Size;
  backgroundColor: ColorValue;
  borderRadius: number;
}

const StyledBox = styled.View<IStyledBox>(({ size, backgroundColor, borderRadius }) => {
  const medium: ViewStyle = { width: 64, height: 64, backgroundColor, borderRadius };

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
  backgroundColor?: ColorValue;
  borderRadius?: number;
}

const Box: FC<IBox> = ({ size = 'medium', backgroundColor = 'black', borderRadius = 0 }) => {
  return <StyledBox size={size} backgroundColor={backgroundColor} borderRadius={borderRadius} />;
};

export default memo(Box);
