import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text({
  fontSize: 25,
  margin: 10,
});

const StyledTextInput = styled.TextInput({
  borderWidth: 1,
  borderColor: '#757575',
  padding: 10,
  marginVertical: 10,
  width: 200,
  fontSize: 20,
});

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log({ name, email });
  }, [name, email]);

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
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}
      />
      <StyledTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
      />
    </>
  );
};

export default memo(Form);
