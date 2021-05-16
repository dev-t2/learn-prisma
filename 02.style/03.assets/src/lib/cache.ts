import { Image } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export const cacheIcons = (fonts: any) => {
  return fonts.map((font: any) => Font.loadAsync(font));
};

export const cacheImages = (images: any) => {
  return images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });
};
