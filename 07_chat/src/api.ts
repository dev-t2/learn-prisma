import { Image } from 'react-native';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import moment from 'moment';

export const preloadFonts = (font: {
  [fontFamily: string]: Font.FontSource;
}) => {
  return Font.loadAsync(font);
};

export const preloadImages = (source: { [name: string]: string | number }) => {
  return Object.values(source).map((value) => {
    return typeof value === 'string'
      ? Image.prefetch(value)
      : Asset.fromModule(value).downloadAsync();
  });
};

export const validateEmail = (email: string) => {
  const regExp =
    /^([\w-+']+(?:\.[\w-+']+)*)@[a-z]{1,12}\.([a-z]{2,6}(?:\.[a-z]{2,3})?)$/;

  return regExp.test(email);
};

export const deleteWhitespace = (text: string) => {
  const regExp = /\s/g;

  return text.replace(regExp, '');
};

export const getDateOrTime = (time: number) => {
  const now = moment().startOf('day');
  const target = moment(time).startOf('day');

  return moment(time).format(now.diff(target, 'day') > 0 ? 'MM/DD' : 'HH:mm');
};
