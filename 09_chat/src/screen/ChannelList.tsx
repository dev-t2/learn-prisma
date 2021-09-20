import React, { memo, useCallback } from 'react';
import styled from '@emotion/native';

import { Button } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const ChannelList = () => {
  const onChannel = useCallback(() => {}, []);

  return (
    <Container>
      <Button disabled={false} onPress={onChannel}>
        Channel
      </Button>
    </Container>
  );
};

export default memo(ChannelList);
