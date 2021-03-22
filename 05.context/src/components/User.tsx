import React, { memo } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../contexts';

const StyledText = styled.Text({
  fontSize: 24,
  margin: 10,
});

const User = () => {
  return (
    <UserContext.Consumer>
      {value => <StyledText>Name: {value.name}</StyledText>}
    </UserContext.Consumer>
  );
};

export default memo(User);
