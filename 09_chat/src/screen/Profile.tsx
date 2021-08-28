import React, { memo, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from '@emotion/native';

import {
  ProfileScreenNavigationProp,
  ProfileScreenRouteProp,
} from '../navigation/Auth';
import { Button } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute<ProfileScreenRouteProp>();

  console.log(route.params.user);

  const onSignOut = useCallback(() => {
    navigation.reset({ routes: [{ name: 'SignIn' }] });
  }, [navigation]);

  return (
    <Container>
      <Button onPress={onSignOut}>로그아웃</Button>
    </Container>
  );
};

export default memo(Profile);
