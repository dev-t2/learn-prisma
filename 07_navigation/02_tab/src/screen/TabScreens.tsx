import React from 'react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledText = styled.Text({
  fontSize: 30,
});

export const Mail = () => {
  return (
    <Container>
      <StyledText>Mail</StyledText>
    </Container>
  );
};

export const Profile = () => {
  return (
    <Container>
      <StyledText>Profile</StyledText>
    </Container>
  );
};

export const Settings = () => {
  return (
    <Container>
      <StyledText>Settings</StyledText>
    </Container>
  );
};

export default { Mail, Profile, Settings };
