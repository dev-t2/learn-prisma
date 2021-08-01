import React, { memo, useCallback, useContext, useState } from 'react';
import styled from '@emotion/native';

import { UserContext } from '../contexts/User';

const Container = styled.View({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 10,
});

const StyledText = styled.Text({
  fontSize: 30,
  fontWeight: 'bold',
});

const StyledTextInput = styled.TextInput({
  width: '100%',
  fontSize: 25,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#111',
  padding: 10,
});

const User = () => {
  const { name, setName } = useContext(UserContext);

  const [text, setText] = useState('');

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    setName(text);
    setText('');
  }, [text]);

  return (
    <Container>
      <StyledText>Name: {name}</StyledText>

      <StyledTextInput
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default memo(User);
