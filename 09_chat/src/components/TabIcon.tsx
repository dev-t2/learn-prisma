import React, { FC, memo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

interface ITabIcon {
  name: any;
  isFocus: boolean;
}

const TabIcon: FC<ITabIcon> = ({ name, isFocus }) => {
  const theme = useTheme();

  return (
    <MaterialIcons
      name={name}
      size={26}
      color={isFocus ? theme.main : theme.gray1}
    />
  );
};

export default memo(TabIcon);
