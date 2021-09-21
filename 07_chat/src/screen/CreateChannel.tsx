import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Alert, StyleProp, TextInput, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { CreateChannelScreenNavigationProp } from '../navigation/Main';
import { createChannel } from '../firebase';
import { Button, ErrorMessage, Input, Loading } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: 20,
  backgroundColor: theme.background,
}));

const CreateChannel = () => {
  const navigation = useNavigation<CreateChannelScreenNavigationProp>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contentContainerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({ flex: 1 }),
    []
  );

  const descriptionRef = useRef<TextInput>(null);

  useEffect(() => {
    setIsDisabled(!!errorMessage);
  }, [errorMessage]);

  const onChangeTitle = useCallback((title: string) => {
    setTitle(title);
    setErrorMessage(title.trim() ? '' : 'Please enter the title');
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

      navigation.replace('Channel', { id, title });
    } catch (error) {
      Alert.alert('Create Channel Error');
    } finally {
      setIsLoading(false);
    }
  }, [title, description, navigation]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={contentContainerStyle}
      extraScrollHeight={20}
    >
      {isLoading && <Loading />}

      <Container>
        <Input
          label="Title"
          placeholder="Title"
          maxLength={20}
          returnKeyType="next"
          value={title}
          onChangeText={onChangeTitle}
          onSubmitEditing={onSubmitTitle}
        />

        <Input
          ref={descriptionRef}
          label="Description"
          placeholder="Description"
          maxLength={40}
          value={description}
          onChangeText={onChangeDescription}
          onSubmitEditing={onCreateChannel}
        />

        <ErrorMessage>{errorMessage}</ErrorMessage>

        <Button disabled={isDisabled} onPress={onCreateChannel}>
          Create
        </Button>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default memo(CreateChannel);
