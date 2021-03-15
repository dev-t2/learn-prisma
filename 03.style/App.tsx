import React, { FC, memo } from 'react';
import styled from 'styled-components/native';

import { StyledButton, TextInput } from './src/components';

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
      <StyledButton title="Styled Components" />

      <TextInput borderColor="#3497db" />
      <TextInput borderColor="#9b59b6" />
    </StyledView>
  );
};

export default memo(App);
