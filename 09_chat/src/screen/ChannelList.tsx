import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { ChannelScreenNavigationProp } from '../navigation/Main';
import { Button } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const StyledText = styled.Text({
  fontSize: 30,
});

const ChannelList = () => {
  const navigation = useNavigation<ChannelScreenNavigationProp>();

  const onCreate = useCallback(() => {
    navigation.navigate('CreateChannel');
  }, [navigation]);

  const onChannel = useCallback(() => {
    navigation.navigate('Channel');
  }, [navigation]);

  return (
    <Container>
      <StyledText>ChannelList</StyledText>

      <Button disabled={false} onPress={onCreate}>
        Create
      </Button>

      <Button disabled={false} onPress={onChannel}>
        Channel
      </Button>
    </Container>
  );
};

export default memo(ChannelList);
