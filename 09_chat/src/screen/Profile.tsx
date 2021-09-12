import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/native';

import { RootState } from '../redux/rootReducer';
import { setIsLoading, setUser } from '../redux/user';
import { Button, Image, Input } from '../components';
import { signOut, updateUserInfo } from '../firebase';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  backgroundColor: theme.background,
}));

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onChangePhoto = useCallback(
    async (uri: string) => {
      dispatch(setIsLoading());

      const user = await updateUserInfo(uri);

      dispatch(setUser({ user }));
    },
    [dispatch]
  );

  const onSignOut = useCallback(async () => {
    dispatch(setIsLoading());

    await signOut();

    dispatch(setUser({ user: null }));
  }, [dispatch]);

  return (
    <Container>
      <Image isPhoto uri={user?.photoURL ?? ''} onChangePhoto={onChangePhoto} />

      <Input label="Name" isEditable={false} value={user?.displayName ?? ''} />
      <Input label="Email" isEditable={false} value={user?.email ?? ''} />

      <Button disabled={false} onPress={onSignOut}>
        SignOut
      </Button>
    </Container>
  );
};

export default memo(Profile);
