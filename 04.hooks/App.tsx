import React, { memo } from 'react';
import styled from 'styled-components/native';
import { Form } from './src/components';

const StyledView = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <StyledView>
      <Form />
    </StyledView>
  );
};

export default memo(App);
