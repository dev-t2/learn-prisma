import React, { memo, useCallback, useState } from 'react';
import { Alert } from 'react-native';
import styled from '@emotion/native';

import { auth, signOut, updateUserInfo } from '../firebase';
import { Button, Image, Input, Loading } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  backgroundColor: theme.background,
}));

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onChangePhoto = useCallback(async (uri: string) => {
    try {
      setIsLoading(true);
      // const user = await updateUserInfo(uri);
      await updateUserInfo(uri);
    } catch (e) {
      Alert.alert('Update Photo Error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onSignOut = useCallback(async () => {
    try {
      setIsLoading(true);

      await signOut();
    } catch (e) {
      Alert.alert('SignOut Error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      {isLoading && <Loading />}

      <Image
        isPhoto
        uri={auth.currentUser?.photoURL ?? ''}
        onChangePhoto={onChangePhoto}
      />

      <Input
        label="Name"
        isEditable={false}
        value={auth.currentUser?.displayName ?? ''}
      />

      <Input
        label="Email"
        isEditable={false}
        value={auth.currentUser?.email ?? ''}
      />

      <Button disabled={false} onPress={onSignOut}>
        SignOut
      </Button>
    </Container>
  );
};

export default memo(Profile);
