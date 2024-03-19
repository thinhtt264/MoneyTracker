import React, { FC } from 'react';
import { IntroductionScreen } from '@screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppStore } from '@store';
import { MainStack } from './stacks';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  IntroductionScreen: undefined;
  MainStack: undefined;
};

const RootNavigator: FC = () => {
  const firstTimeLauch = useAppStore(state => state.firstTimeLaunch);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      {firstTimeLauch ? (
        <RootStack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
      ) : (
        <RootStack.Screen name="MainStack" component={MainStack} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
