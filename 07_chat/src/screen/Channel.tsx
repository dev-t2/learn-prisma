import React, { memo, useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from '@emotion/native';

import { ChannelScreenRouteProp } from '../navigation/Main';
import { createMessage } from '../firebase';
import { Input, Spinner } from '../components';
import { setIsLoading } from '../redux/user';
import { RootState } from '../redux/rootReducer';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const Channel = () => {
  const { params } = useRoute<ChannelScreenRouteProp>();

  const { isLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const onChangeMessage = useCallback((message: string) => {
    setMessage(message.trim());
  }, []);

  const onCreateMessage = useCallback(() => {
    try {
      dispatch(setIsLoading({ isLoading: true }));

      createMessage({ channelId: params.id, message });
    } catch (e) {
      Alert.alert('Create Message Error');
    } finally {
      dispatch(setIsLoading({ isLoading: false }));
    }
  }, [dispatch, params.id, message]);

  return (
    <Container>
      {isLoading && <Spinner />}

      <Input
        value={message}
        onChangeText={onChangeMessage}
        onSubmitEditing={onCreateMessage}
      />
    </Container>
  );
};

export default memo(Channel);
