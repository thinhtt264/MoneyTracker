import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTab } from '@navigation/tab';
import { HomeScreen } from '@screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

type HomeStackParamList = {
  HomeTab: undefined;
  HomeScreen: undefined;
};
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen
        options={{
          animation: 'fade_from_bottom',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
