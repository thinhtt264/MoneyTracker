import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTab } from '@navigation/tab';

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
    </Stack.Navigator>
  );
};

export default HomeStack;
