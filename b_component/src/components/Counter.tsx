import React, { FC, memo } from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
});

const CountContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const Count = styled.Text({
  fontSize: 72,
  fontWeight: 'bold',
});

const ButtonContainer = styled.View({
  flexDirection: 'row',
});

const StyledPressable = styled.Pressable({
  flex: 1,
  padding: 24,
});

const StyledText = styled.Text({
  textAlign: 'center',
  fontSize: 24,
});

interface ICounter {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter: FC<ICounter> = ({ count, onIncrease, onDecrease }) => {
  return (
    <Container>
      <CountContainer>
        <Count>{count}</Count>
      </CountContainer>

      <ButtonContainer>
        <StyledPressable onPress={onIncrease}>
          <StyledText>+1</StyledText>
        </StyledPressable>

        <StyledPressable onPress={onDecrease}>
          <StyledText>-1</StyledText>
        </StyledPressable>
      </ButtonContainer>
    </Container>
  );
};

export default memo(Counter);
