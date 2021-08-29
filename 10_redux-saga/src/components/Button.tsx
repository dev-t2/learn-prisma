import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/native';
import { getDataRequest } from '../redux/data/slice';

const StyledPressable = styled.Pressable({});

const StyledText = styled.Text({});

const Button = () => {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  return (
    <StyledPressable onPress={onPress}>
      <StyledText>Get Data</StyledText>
    </StyledPressable>
  );
};

export default memo(Button);
