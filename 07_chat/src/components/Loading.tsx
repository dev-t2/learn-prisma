import React, { FC, memo } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

interface ILoading {
  isLoading: boolean;
}

const Loading: FC<ILoading> = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <Modal animationType="fade" transparent visible={isLoading}>
      <Container>
        <ActivityIndicator size="large" color={theme.main} />
      </Container>
    </Modal>
  );
};

export default memo(Loading);
