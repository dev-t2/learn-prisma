import React, { memo } from 'react';
import styled from 'styled-components/native';

import { BottomBar, Content, TopBar } from './src/screens';

const StyledSafeAreaView = styled.SafeAreaView({
  flex: 1,
});

const App = () => {
  return (
    <StyledSafeAreaView>
      <TopBar />
      <Content />
      <BottomBar />
    </StyledSafeAreaView>
  );
};

export default memo(App);
