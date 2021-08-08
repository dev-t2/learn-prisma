import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/native';

import { RootState } from '../redux/rootReducer';
import { updateCount } from '../redux/count';

const StyledText = styled.Text({
  fontSize: 40,
  color: '#000',
  marginBottom: 10,
});

const ButtonContainer = styled.View({
  flexDirection: 'row',
});

const StyledPressable = styled.Pressable({
  width: 100,
  backgroundColor: '#115293',
  borderRadius: 10,
  margin: 10,
});

const ButtonText = styled.Text({
  fontSize: 20,
  color: '#fff',
  textAlign: 'center',
  padding: 10,
});

const Count = () => {
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  const onPlus = useCallback(() => {
    dispatch(updateCount({ count: count + 1 }));
  }, [dispatch, count]);

  const onMinus = useCallback(() => {
    dispatch(updateCount({ count: count - 1 }));
  }, [dispatch, count]);

  return (
    <>
      <StyledText>{count}</StyledText>

      <ButtonContainer>
        <StyledPressable onPress={onPlus}>
          <ButtonText>Plus</ButtonText>
        </StyledPressable>

        <StyledPressable onPress={onMinus}>
          <ButtonText>Minus</ButtonText>
        </StyledPressable>
      </ButtonContainer>
    </>
  );
};

export default memo(Count);
