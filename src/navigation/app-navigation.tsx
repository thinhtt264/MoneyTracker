import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { RXStore, useAppDispatch, useAppSelector } from 'src/common/redux';
import { navigationRef } from 'src/common/navigation';
import RootNavigator from './root-navigator';
import { MyAppTheme } from 'src/themes';
import { appInit } from 'src/store/app-thunk';
import { StatusBar } from 'react-native';
// import { AppLoader } from 'src/components/loader';

export const AppNavigation = () => {
  const { loadingApp, theme, env } = useAppSelector(state => state.app);
  const [init, setInit] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = async () => {
      await dispatch(appInit());
    };
    init().finally(() => {
      setTimeout(() => {
        setInit(true);
        RNBootSplash.hide({ fade: true }).then(() => {
          StatusBar.setTranslucent(true);
          StatusBar.setBackgroundColor('transparent');
        });
      }, 1000);
    });
  }, []);

  return (
    <NavigationContainer theme={MyAppTheme[theme]} ref={navigationRef}>
      {init && env && <RootNavigator />}
      {/* Snack bar */}
      {/* <SnackBar /> */}
      {/* Modal Alert */}
      {/* <Alert /> */}
      {/* App Loader */}
      {/* {loadingApp && <AppLoader />} */}
      <RXStore />
    </NavigationContainer>
  );
};
