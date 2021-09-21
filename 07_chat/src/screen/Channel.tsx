import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { Alert, StyleProp, ViewStyle } from 'react-native';
import {
  GiftedChat,
  IMessage,
  Send,
  SendProps,
  User,
} from 'react-native-gifted-chat';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import {
  ChannelScreenNavigationProp,
  ChannelScreenRouteProp,
} from '../navigation/Main';
import { createMessage, firestore, getCurrentUser } from '../firebase';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const Channel = () => {
  const theme = useTheme();

  const navigation = useNavigation<ChannelScreenNavigationProp>();
  const { params } = useRoute<ChannelScreenRouteProp>();

  const [messages, setMessages] = useState<IMessage[]>([]);

  const user = useMemo<User | undefined>(() => {
    const currentUser = getCurrentUser();

    if (currentUser) {
      return {
        _id: currentUser.uid,
        name: currentUser.displayName ?? '',
        avatar: currentUser.photoURL ?? '',
      };
    }

    return undefined;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.title });
  }, [navigation, params.title]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('channels')
      .doc(params.id)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data() as IMessage));
      });

    return () => unsubscribe();
  }, [params.id]);

  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => ({
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }),
    []
  );

  const renderSend = useCallback(
    (
      props: Readonly<SendProps<IMessage>> &
        Readonly<{
          children?: React.ReactNode;
        }>
    ) => {
      return (
        <Send {...props} containerStyle={containerStyle} disabled={!props.text}>
          <MaterialIcons
            name="send"
            size={24}
            color={props.text ? theme.main : theme.gray2}
          />
        </Send>
      );
    },
    [containerStyle, theme.main, theme.gray2]
  );

  const onSend = useCallback(
    async (messages: IMessage[]) => {
      const message = messages[0];

      try {
        await createMessage({ channelId: params.id, message });
      } catch (e) {
        Alert.alert('Send Error');
      }
    },
    [params.id]
  );

  return (
    <Container>
      <GiftedChat
        scrollToBottom
        alwaysShowSend
        renderSend={renderSend}
        messages={messages}
        user={user}
        onSend={onSend}
      />
    </Container>
  );
};

export default memo(Channel);
