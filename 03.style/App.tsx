import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { viewStyles } from './src/styles';
import { Contents, Footer, Header } from './src/components';

const App: FC = () => {
  return (
    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default memo(App);
