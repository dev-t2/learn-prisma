import React, { memo } from 'react';
import styled from 'styled-components/native';

import * as D from '../data';

const StyledView = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflow: 'hidden',
  justifyContent: 'center',
  flex: 1,
  padding: 5,
});

const StyledAvatarContainer = styled.View({
  padding: 3,
});

const StyledAvatar = styled.Image({
  width: 50,
  height: 50,
  borderRadius: 25,
});

const avatars = D.makeArray(200).map(() => D.randomAvatarUrl());

const Content = () => {
  return (
    <StyledView>
      {avatars.map((avatar, index) => (
        <StyledAvatarContainer key={index}>
          <StyledAvatar source={{ uri: avatar }} />
        </StyledAvatarContainer>
      ))}
    </StyledView>
  );
};

export default memo(Content);
