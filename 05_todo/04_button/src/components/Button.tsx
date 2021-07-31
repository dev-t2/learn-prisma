import React, { FC, memo } from 'react';
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';
import styled from '@emotion/native';

const StyledPressable = styled.Pressable({
  margin: 10,
});

const Icon = styled.Image(({ theme }) => ({
  width: 30,
  height: 30,
  tintColor: theme.text,
}));

interface IButton {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: FC<IButton> = ({ icon, onPress }) => {
  return (
    <StyledPressable onPress={onPress}>
      <Icon source={icon} />
    </StyledPressable>
  );
};

export default memo(Button);
