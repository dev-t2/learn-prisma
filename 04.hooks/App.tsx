import React, { memo } from 'react';
import styled from 'styled-components/native';
import Counter from './src/components/Counter';

const StyledView = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <StyledView>
      <Counter />
    </StyledView>
  );
};

export default memo(App);
