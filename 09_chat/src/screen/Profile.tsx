import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/native';

import { setUser } from '../redux/user';
import { Button } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const Profile = () => {
  const dispatch = useDispatch();

  const onSignOut = useCallback(() => {
    dispatch(setUser({ user: null }));
  }, [dispatch]);

  return (
    <Container>
      <Button disabled={false} onPress={onSignOut}>
        로그아웃
      </Button>
    </Container>
  );
};

export default memo(Profile);
