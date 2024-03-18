import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

type HomeStackParamList = {
  HomeScreen: undefined;
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
