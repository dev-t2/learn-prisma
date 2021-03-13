import React, { memo } from 'react';
import { View } from 'react-native';
import { ShadowBoxStyles } from '../styles';

const ShadowBox = () => {
  return <View style={ShadowBoxStyles.shadow} />;
};

export default memo(ShadowBox);
