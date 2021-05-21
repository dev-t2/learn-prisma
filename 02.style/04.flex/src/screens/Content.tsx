import React, { memo, useMemo } from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

import * as D from '../data';

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
  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      flexDirection: 'row',
      flexWrap: 'wrap',
    }),
    []
  );

  return (
    <ScrollView contentContainerStyle={contentContainerStyle}>
      {avatars.map((avatar, index) => {
        const source: ImageSourcePropType = { uri: avatar };

        return (
          <StyledAvatarContainer key={index}>
            <StyledAvatar source={source} />
          </StyledAvatarContainer>
        );
      })}
    </ScrollView>
  );
};

export default memo(Content);
