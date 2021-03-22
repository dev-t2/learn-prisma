import React, { memo } from 'react';
import styled from 'styled-components/native';

import { UserConsumer } from '../contexts/User';

const StyledText = styled.Text({
  fontSize: 24,
  margin: 10,
});

const User = () => {
  return (
    <UserConsumer>
      {({ user }) => <StyledText>Name: {user.name}</StyledText>}
    </UserConsumer>
  );
};

export default memo(User);
