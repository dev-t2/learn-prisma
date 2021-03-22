import React, { memo } from 'react';
import styled from 'styled-components/native';

import { User } from './src/components';
import { UserProvider } from './src/contexts/User';

const StyledView = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
});

const App = () => {
  return (
    <UserProvider>
      <StyledView>
        <User />
      </StyledView>
    </UserProvider>
  );
};

export default memo(App);
