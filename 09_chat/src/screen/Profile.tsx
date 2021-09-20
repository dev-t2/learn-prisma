import React, { memo, useCallback } from 'react';
import { Alert } from 'react-native';
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
      try {
        dispatch(setIsLoading({ isLoading: true }));

        const user = await updateUserInfo(uri);

        dispatch(setUser({ user }));
      } catch (e) {
        Alert.alert('Update Photo Error');
      } finally {
        dispatch(setIsLoading({ isLoading: false }));
      }
    },
    [dispatch]
  );

  const onSignOut = useCallback(async () => {
    try {
      dispatch(setIsLoading({ isLoading: true }));

      await signOut();

      dispatch(setUser({ user: null }));
    } catch (e) {
      Alert.alert('SignOut Error');
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
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
