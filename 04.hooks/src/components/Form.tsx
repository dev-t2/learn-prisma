import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text({
  fontSize: 24,
  margin: 8,
});

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})({
  border: '1px solid #757575',
  padding: 8,
  marginVertical: 8,
  width: 200,
  fontSize: 16,
});

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('===== Form Component Mount =====');

    return () => console.log('===== Form Component Unmount =====');
  }, []);

  const onChangeName = useCallback(text => {
    setName(text);
  }, []);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>

      <StyledTextInput
        value={name}
        placeholder="name"
        onChangeText={onChangeName}
      />
      <StyledTextInput
        value={email}
        placeholder="email"
        onChangeText={onChangeEmail}
      />
    </>
  );
};

export default memo(Form);
