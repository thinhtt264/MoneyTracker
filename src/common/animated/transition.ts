import { useEffect } from 'react';

import Animated, {
  AnimatableValue,
  Easing,
  SharedValue,
  TimingAnimation,
  useDerivedValue,
  useSharedValue,
  withSpring,
  WithSpringConfig,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

import { sharedBin } from './math';

/**
 * Return value runs from 0 to 1 when state change using withTiming
 */
export const useSharedTransition = (
  state: boolean | number,
  config?: WithTimingConfig,
): SharedValue<number> => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'boolean' ? sharedBin(state) : state;
  }, [state, value]);
  return useDerivedValue(() =>
    withTiming(
      value.value,
      Object.assign(
        { duration: 500, easing: Easing.bezier(0.33, 0.01, 0, 1) },
        config,
      ),
    ),
  );
};

/**
 * Return value runs from 0 to 1 when state change using withSpring
 */
export const useSharedSpringTransition = (
  state: boolean,
  config?: WithSpringConfig,
): SharedValue<number> => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'boolean' ? sharedBin(state) : state;
  }, [state, value]);
  return useDerivedValue(() => withSpring(value.value, config));
};

export const useCustomSharedTransition = (
  state: boolean | number,
  timeConfig?: WithTimingConfig,
  toValue?: any,
): SharedValue<number> => {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = typeof state === 'boolean' ? sharedBin(state) : state;
  }, [state, value]);
  return useDerivedValue(() =>
    withTiming(
      toValue,
      Object.assign(
        { duration: 500, easing: Easing.bezier(0.33, 0.01, 0, 1) },
        timeConfig,
      ),
    ),
  );
};
