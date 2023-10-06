import {
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { RouteNames, ScreenNames } from 'src/navigation/RouteNames';

export type RouteParams =
  | {
      screen?: ScreenNames;
      params?: any;
    }
  | Object;

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(name: RouteNames, params?: RouteParams) {
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
