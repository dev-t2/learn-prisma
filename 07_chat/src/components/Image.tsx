import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';
import { Alert, ImageSourcePropType, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  position: 'relative',
});

const StyledImage = styled.Image(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: theme.gray1,
}));

const StyledPressable = styled.Pressable(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.gray2,
  borderRadius: 15,
}));

interface IImage {
  uri: string;
  isPhoto?: boolean;
  onChangePhoto?: (uri: string) => void;
}

const Image: FC<IImage> = ({ uri, isPhoto = false, onChangePhoto }) => {
  const theme = useTheme();

  const source = useMemo<ImageSourcePropType>(() => ({ uri }), [uri]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Photo Permission',
            'Please turn on the camera permission.'
          );
        }
      }
    })();
  }, []);

  const onPress = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled && onChangePhoto) {
      onChangePhoto(result.uri);
    }
  }, [onChangePhoto]);

  return (
    <Container>
      <StyledImage source={source} />

      {isPhoto && (
        <StyledPressable onPress={onPress}>
          <MaterialIcons name="photo-camera" size={16} color={theme.white} />
        </StyledPressable>
      )}
    </Container>
  );
};

export default memo(Image);
