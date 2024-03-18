import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntroductionScreen } from '@screens';

const Stack = createNativeStackNavigator<HomeStackParamList>();

type HomeStackParamList = {
  HomeScreen: undefined;
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={IntroductionScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
