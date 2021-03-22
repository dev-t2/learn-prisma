import React, { memo } from 'react';
import styled from 'styled-components/native';

import { User } from './src/components';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
});

const App = () => {
  return (
    <StyledView>
      <User />
    </StyledView>
  );
};

export default memo(App);
