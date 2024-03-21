import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigator from './root-navigator';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyAppTheme } from '@themes';
import { isIos, navigationRef } from '@common';

const theme = 'light';
export const AppNavigation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initStore = async () => {
      //init
    };
    initStore().finally(() => {
      setInit(true);
      RNBootSplash.hide({ fade: true }).then(() => {
        if (!isIos) {
          StatusBar.setTranslucent(true);
          StatusBar.setBackgroundColor('transparent');
          StatusBar.setBarStyle('dark-content');
        }
      });
    });
  }, []);

  return (
    <NavigationContainer theme={MyAppTheme[theme]} ref={navigationRef}>
      {init && <RootNavigator />}
      {/* Snack bar */}
      {/* <SnackBar /> */}
      {/* Modal Alert */}
      {/* <Alert /> */}
      {/* App Loader */}
      {/* {loadingApp && <AppLoader />} */}
    </NavigationContainer>
  );
};
