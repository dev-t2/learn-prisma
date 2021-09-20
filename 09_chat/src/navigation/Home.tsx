import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { HomeScreenNavigationProp, HomeScreenRouteProp } from './Main';
import { ChannelList, Profile } from '../screen';
import { TabIcon } from '../components';

type HomeStackParamList = {
  List: undefined;
  Profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<HomeStackParamList>();

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();

  const screenOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
      tabBarShowLabel: false,
    }),
    []
  );

  const ChannelListOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ focused }) => (
        <TabIcon
          name={focused ? 'chat-bubble' : 'chat-bubble-outline'}
          isFocus={focused}
        />
      ),
    }),
    []
  );

  const ProfileOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      tabBarIcon: ({ focused }) => (
        <TabIcon
          name={focused ? 'person' : 'person-outline'}
          isFocus={focused}
        />
      ),
    }),
    []
  );

  const style = useMemo<StyleProp<TextStyle>>(() => ({ marginRight: 20 }), []);

  const onCreateChannel = useCallback(() => {
    navigation.navigate('CreateChannel');
  }, [navigation]);

  useEffect(() => {
    const screenName = getFocusedRouteNameFromRoute(route) ?? 'List';

    navigation.setOptions({
      headerTitle: screenName,
      headerRight: () => {
        return (
          screenName === 'List' && (
            <MaterialIcons
              name="add"
              size={26}
              style={style}
              onPress={onCreateChannel}
            />
          )
        );
      },
    });
  }, [route, navigation, style, onCreateChannel]);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="List"
        component={ChannelList}
        options={ChannelListOptions}
      />
      <Screen name="Profile" component={Profile} options={ProfileOptions} />
    </Navigator>
  );
};

export default memo(Home);
