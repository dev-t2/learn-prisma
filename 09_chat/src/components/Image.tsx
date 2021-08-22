import React, { FC, memo, useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from '@emotion/native';

const StyledImage = styled.Image(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: theme.gray1,
}));

interface IImage {
  uri?: string;
}

const Image: FC<IImage> = ({
  uri = 'https://firebasestorage.googleapis.com/v0/b/expo-chat-64b70.appspot.com/o/face.png?alt=media',
}) => {
  const source = useMemo<ImageSourcePropType>(() => ({ uri }), [uri]);

  return <StyledImage source={source} />;
};

export default memo(Image);
