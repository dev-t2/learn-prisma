import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CreateChannelNavigation } from '../navigation/Main';
import { createChannel } from '../firebase';
import {
  Button,
  ErrorMessage,
  Input,
  InsetsContainer,
  Loading,
} from '../components';

const CreateChannel = () => {
  const navigation = useNavigation<CreateChannelNavigation>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const descriptionRef = useRef<TextInput>(null);

  useEffect(() => {
    setIsValid(!!title && !errorMessage);
  }, [title, errorMessage]);

  const onChangeTitle = useCallback((title: string) => {
    setTitle(title);
    setErrorMessage(title.trim() ? '' : '채팅방 이름을 입력해주세요');
  }, []);

  const onSubmitTitle = useCallback(() => {
    descriptionRef.current?.focus();
  }, []);

  const onChangeDescription = useCallback((description: string) => {
    setDescription(description);
  }, []);

  const onCreateChannel = useCallback(async () => {
    try {
      setIsLoading(true);

      const { id } = await createChannel({ title, description });

      setIsLoading(false);

      navigation.replace('Channel', { id, title });
    } catch (error) {
      setIsLoading(false);

      Alert.alert((error as Error).message);
    }
  }, [title, description, navigation]);

  return (
    <InsetsContainer>
      <Loading isLoading={isLoading} />

      <Input
        label="채팅방 이름"
        placeholder="채팅방 이름을 입력해주세요"
        maxLength={20}
        returnKeyType="next"
        value={title}
        onChangeText={onChangeTitle}
        onSubmitEditing={onSubmitTitle}
      />

      <Input
        ref={descriptionRef}
        label="추가 정보"
        placeholder="채팅방에 대한 추가 정보를 입력해주세요"
        maxLength={40}
        value={description}
        onChangeText={onChangeDescription}
        onSubmitEditing={onCreateChannel}
      />

      <ErrorMessage>{errorMessage}</ErrorMessage>

      <Button isActive={isValid} onPress={onCreateChannel}>
        생성하기
      </Button>
    </InsetsContainer>
  );
};

export default memo(CreateChannel);
