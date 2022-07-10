import React, { FC, memo, ReactNode } from 'react';
import { Text, View } from 'react-native';

interface IHeaderTitle {
  children: ReactNode;
}

const HeaderTitle: FC<IHeaderTitle> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default memo(HeaderTitle);
