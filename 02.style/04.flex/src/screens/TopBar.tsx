import React, { memo } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import * as D from '../data';

const StyledView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  padding: 5,
  backgroundColor: Colors.amber500,
});

const StyledImage = styled.Image({
  width: 40,
  height: 40,
  borderRadius: 20,
});

const StyledCenterView = styled.View({
  flex: 1,
});

const StyledText = styled.Text({
  fontSize: 20,
  color: Colors.white,
  textAlign: 'center',
});

const name = D.randomName();
const source: ImageSourcePropType = { uri: D.randomAvatarUrl() };

const TopBar = () => {
  return (
    <StyledView>
      <StyledImage source={source} />

      <StyledCenterView>
        <StyledText>{name}</StyledText>
      </StyledCenterView>

      <MaterialCommunityIcons name="menu" size={24} color="white" />
    </StyledView>
  );
};

export default memo(TopBar);
