import React, { FC } from 'react';
import { IntroductionScreen } from '@screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStack } from './stacks';
import { useAppStore } from '@store';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  IntroductionScreen: undefined;
  AuthStack: undefined;
  HomeStack: undefined;
};

const RootNavigator: FC = () => {
  const firstTimeLauch = useAppStore(state => state.firstTimeLaunch);
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade' }}>
      {firstTimeLauch ? (
        <RootStack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
      ) : (
        <RootStack.Screen name="HomeStack" component={HomeStack} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
