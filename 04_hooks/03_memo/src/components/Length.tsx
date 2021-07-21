import React, { memo, useCallback, useMemo, useState } from 'react';
import { Button } from 'react-native';
import styled from '@emotion/native';

const StyledText = styled.Text({
  fontSize: 25,
});

const getLength = (text: string) => {
  console.log(`Target Text: ${text}`);

  return text.length;
};

const list = ['TypeScript', 'React Native', 'React Native', 'Expo'];

const Length = () => {
  const [text, setText] = useState(list[0]);
  const [length, setLength] = useState(0);
  const [index, setIndex] = useState(0);

  const result = useMemo(() => getLength(text), [text]);

  const onPress = useCallback(() => {
    setLength(result);

    setIndex(prev => {
      if (prev < list.length - 1) {
        setText(list[index + 1]);

        return prev + 1;
      }

      return prev;
    });
  }, [result, index]);

  return (
    <>
      <StyledText>Text: {text}</StyledText>
      <StyledText>Length: {length}</StyledText>

      <Button title="Get Length" onPress={onPress} />
    </>
  );
};

export default memo(Length);
