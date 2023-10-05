import {
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RouteNames } from 'src/navigation/RouteNames';

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(name: RouteNames, params?: any) {
  navigationRef?.navigate(name, params);
}

export function replace(name: RouteNames, params?: any) {
  navigationRef?.dispatch(StackActions.replace(name, params));
}

export function reset(params?: any) {
  navigationRef?.reset(params);
}

export function goBack() {
  if (navigationRef.current?.canGoBack?.()) {
    navigationRef?.goBack();
  }
}
