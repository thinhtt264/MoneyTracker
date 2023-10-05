import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { useAppSelector } from 'src/common/redux';
import { IntroductionScreen } from 'src/screens';
import { MainStack } from './stacks';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  IntroductionScreen: undefined;
  AuthStack: undefined;
  MainStack: undefined;
};

const RootNavigator: FC = () => {
  const { firstTimeLauch } = useAppSelector(state => state.app);
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade' }}>
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
