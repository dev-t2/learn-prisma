import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

import { StyledButton } from './src/components';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const App: FC = () => {
  return (
    <StyledView>
      <StyledButton title="React Native" />
    </StyledView>
  );
};

export default memo(App);
