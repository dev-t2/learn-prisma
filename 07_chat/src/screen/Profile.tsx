import React, { memo, useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { auth, signOut, updateUserInfo } from '../firebase';
import { Button, Image, Input, InsetsContainer, Loading } from '../components';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (auth.currentUser) {
        const { photoURL, displayName, email } = auth.currentUser;

        if (photoURL && displayName && email) {
          setIsLoading(false);
        } else {
          await auth.currentUser?.reload();
        }
      }
    })();
  }, []);

  const onChangePhoto = useCallback(async (uri: string) => {
    try {
      setIsLoading(true);

      await updateUserInfo(uri);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      Alert.alert((error as Error).message);
    }
  }, []);

  const onSignOut = useCallback(async () => {
    try {
      setIsLoading(true);

      await signOut();

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      Alert.alert((error as Error).message);
    }
  }, []);

  return (
    <InsetsContainer>
      <Loading isLoading={isLoading} />

      <Image
        marginVertical={40}
        isPhoto
        uri={auth.currentUser?.photoURL ?? ''}
        onChangePhoto={onChangePhoto}
      />

      <Input
        label="닉네임"
        isEditable={false}
        value={auth.currentUser?.displayName ?? ''}
      />

      <Input
        label="이메일"
        isEditable={false}
        value={auth.currentUser?.email ?? ''}
      />

      <Button isActive onPress={onSignOut}>
        로그아웃
      </Button>
    </InsetsContainer>
  );
};

export default memo(Profile);
