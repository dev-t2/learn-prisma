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

const CreateChannel = () => {
  const navigation = useNavigation<ChannelScreenNavigationProp>();

  const onChannel = useCallback(() => {
    navigation.replace('Channel');
  }, [navigation]);

  return (
    <Container>
      <StyledText>Create</StyledText>

      <Button disabled={false} onPress={onChannel}>
        Create
      </Button>
    </Container>
  );
};

export default memo(CreateChannel);
