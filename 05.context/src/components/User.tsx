import React, { memo, useContext } from 'react';
import styled from 'styled-components/native';

import UserContext from '../contexts/User';

const StyledText = styled.Text({
  fontSize: 24,
  margin: 10,
});

const User = () => {
  const { user } = useContext(UserContext);

  return <StyledText>Name: {user.name}</StyledText>;
};

export default memo(User);
