import React, { memo } from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
  marginBottom: 10,
});

const Item = () => {
  return (
    <StyledView>
      <StyledText>Item</StyledText>
    </StyledView>
  );
};

export default memo(Item);
