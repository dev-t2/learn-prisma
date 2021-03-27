import React, { memo } from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
});

export const Settings = () => {
  return (
    <StyledView>
      <StyledText>Settings</StyledText>
    </StyledView>
  );
};

export default memo(Settings);
