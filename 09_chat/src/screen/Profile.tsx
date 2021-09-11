import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/native';

import { setUser } from '../redux/user';
import { getUser } from '../firebase';
import { Button, Image, Input } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  backgroundColor: theme.background,
}));

const user = getUser();

const Profile = () => {
  const dispatch = useDispatch();

  const [photoURL, setPhotoURL] = useState(user?.photoURL ?? '');

  const onSignOut = useCallback(() => {
    dispatch(setUser({ user: null }));
  }, [dispatch]);

  return (
    <Container>
      <Image isPhoto uri={photoURL} />

      <Input label="Name" value={user?.displayName ?? ''} />

      <Input label="Email" value={user?.email ?? ''} />

      <Button disabled={false} onPress={onSignOut}>
        SignOut
      </Button>
    </Container>
  );
};

export default memo(Profile);
