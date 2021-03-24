import React, { memo } from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
});

const App = () => {
  return <StyledView />;
};

export default memo(App);
