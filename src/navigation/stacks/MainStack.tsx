import React, { useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { isIos } from 'src/common/device';
import { useAppSelector } from 'src/common/redux';
import Colors from 'src/themes/Colors';
import HomeStack from './HomeStack';

export type MainStackParamList = {
  HomeStack: undefined;
  AuthStack: undefined;
};
export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

export type MainStackRouteProps<RouteName extends keyof MainStackParamList> =
  RouteProp<MainStackParamList, RouteName>;

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  const { loadingApp } = useAppSelector(state => state.app);

  useEffect(() => {}, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: isIos ? 'fade_from_bottom' : 'default',
      }}>
      {/* <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          statusBarStyle: loadingApp ? 'light' : 'dark',
          statusBarColor: loadingApp
            ? Colors.black.default
            : Colors.white.default,
        }}
      /> */}
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
