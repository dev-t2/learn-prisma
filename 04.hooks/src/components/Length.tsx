import React, { memo, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text({
  fontSize: 24,
});

const LIST = ['TypeScript', 'Expo', 'Expo', 'React Native'];

let index = 0;

type IGetLength = (text: string) => number;

const getLength: IGetLength = text => {
  console.log(`Target Text: ${text}`);

  return text.length;
};

const Length = () => {
  const [text, setText] = useState(LIST[0]);

  const length = useMemo(() => getLength(text), [text]);

  const onPress = useCallback(() => {
    index += 1;

    if (index < LIST.length) setText(LIST[index]);
  }, []);

  return (
    <>
      <StyledText>Text: {text}</StyledText>
      <StyledText>Length: {length}</StyledText>

      <Button title="Get Length" onPress={onPress} />
    </>
  );
};

export default memo(Length);
