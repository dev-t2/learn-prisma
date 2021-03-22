import React, { memo } from 'react';
import styled from 'styled-components/native';
import Length from './src/components/Length';

const StyledView = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const App = () => {
  return (
    <StyledView>
      <Length />
    </StyledView>
  );
};

export default memo(App);
