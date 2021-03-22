import React, { memo, useCallback, useContext, useState } from 'react';
import styled from 'styled-components/native';

import UserContext, { UserConsumer } from '../contexts/User';

const StyledTextInput = styled.TextInput({
  width: 248,
  margin: 8,
  paddingVertical: 8,
  paddingHorizontal: 16,
  fontSize: 24,
});

const Input = () => {
  const { dispatch } = useContext(UserContext);

  const [name, setName] = useState('');

  const onChangeText = useCallback(text => {
    setName(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    dispatch(name);

    setName('');
  }, [dispatch, name]);

  return (
    <StyledTextInput
      value={name}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      placeholder="Enter a name..."
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default memo(Input);
