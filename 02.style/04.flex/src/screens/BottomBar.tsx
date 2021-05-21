import React, { memo } from 'react';
import { Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const StyledView = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: 10,
  backgroundColor: Colors.blue500,
});

const StyledMaterialCommunityIcons = styled(MaterialCommunityIcons)({});

const icons = [
  'home',
  'table-search',
  'face-profile-woman',
  'account-settings',
];

const BottomBar = () => {
  return (
    <StyledView>
      {icons.map(name => (
        <StyledMaterialCommunityIcons
          key={name}
          name={name}
          size={30}
          color="#ffffff"
        />
      ))}
    </StyledView>
  );
};

export default memo(BottomBar);
