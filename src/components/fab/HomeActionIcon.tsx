/* eslint-disable react-native/no-color-literals */
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Colors, Layout } from '@themes';
import Octicons from 'react-native-vector-icons/Octicons';
import { kWidth, scale, useSharedSpringTransition } from '@common';
import Animated, {
  FadeInDown,
  FadeOutDown,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ExchangeIcon, ExpenseIcon, IncomeIcon } from '@components';
import { Portal } from '@gorhom/portal';
import { CurvedHomeTab } from './CurvedHomeTab';

const IconSize = 52;
const topz = -scale(IconSize / 2);

const tl = -scale(IconSize + 10);
const tr = scale(IconSize + 10);
const tt = -scale(IconSize) + topz;
const ttCenterIcon = -scale(IconSize * 2 + 15) + topz;

const HomeActionIconComponent = forwardRef((_, ref) => {
  const [isOpen, setOpen] = useState(false);
  const callBackRef = useRef<any>(null);
  const animation = useSharedSpringTransition(isOpen, {
    duration: 400,
    dampingRatio: 0.6,
  });

  const plusIconStylez = useAnimatedStyle(() => {
    const rotate = interpolate(animation.value, [0, 1], [0, 45]);
    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  }, [animation]);

  const exchangeIconStylez = useAnimatedStyle(() => {
    const translateY = interpolate(
      animation.value,
      [0, 1],
      [topz, ttCenterIcon],
    );
    const scalez = interpolate(animation.value, [0, 1], [0, 1]);
    const opacity = interpolate(animation.value, [0, 1], [0, 1]);

    return {
      transform: [{ translateY: translateY }, { scale: scalez }],
      opacity,
    };
  }, [animation]);

  const incomeIconStylez = useAnimatedStyle(() => {
    const translateY = interpolate(animation.value, [0, 1], [topz, tt]);
    const translateX = interpolate(animation.value, [0, 1], [0, tl]);
    const scalez = interpolate(animation.value, [0, 1], [0, 1]);
    const opacity = interpolate(animation.value, [0, 1], [0, 1]);

    return {
      transform: [
        { translateY: translateY },
        { scale: scalez },
        { translateX },
      ],
      opacity,
    };
  }, [animation]);

  const expenseIconStylez = useAnimatedStyle(() => {
    const translateY = interpolate(animation.value, [0, 1], [topz, tt]);
    const translateX = interpolate(animation.value, [0, 1], [0, tr]);
    const scalez = interpolate(animation.value, [0, 1], [0, 1]);
    const opacity = interpolate(animation.value, [0, 0.4, 1], [0, 1, 1]);

    return {
      transform: [
        { translateY: translateY },
        { scale: scalez },
        { translateX },
      ],
      opacity,
    };
  }, [animation]);

  const onPress = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    callBackRef.current?.(isOpen);
  }, [isOpen]);

  useImperativeHandle(
    ref,
    () => ({
      toggle: () => {
        setOpen(false);
      },
      isOpen: () => isOpen,
      isOpenObservable: (callback: any) => {
        callBackRef.current = callback;
      },
    }),
    [isOpen],
  );

  return (
    <>
      {isOpen ? (
        <Portal hostName="BackDropFabHost">
          <View style={styles.backdrop} />
        </Portal>
      ) : null}

      <CurvedHomeTab
        color={isOpen ? Colors.backdrop.default : Colors.white.default}
      />
      <Animated.View
        style={(Layout.fill, Layout.center)}
        entering={FadeInDown.duration(100).springify()}
        exiting={FadeOutDown.duration(100)}>
        <TouchableOpacity
          style={styles.plusIcon}
          onPress={onPress}
          activeOpacity={0.9}>
          <Animated.View style={[Layout.fill, Layout.center, plusIconStylez]}>
            <Octicons
              name="plus"
              size={scale(26)}
              color={Colors.white.default}
            />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View
          style={[
            Layout.center,
            styles.floatButton,
            styles.exchangeIcon,
            exchangeIconStylez,
          ]}>
          <ExchangeIcon height={32} width={32} viewBox={`0 0 ${32} ${32}`} />
        </Animated.View>

        <Animated.View
          style={[
            Layout.center,
            styles.floatButton,
            styles.incomeIcon,
            incomeIconStylez,
          ]}>
          <IncomeIcon height={32} width={32} viewBox={`0 0 ${32} ${32}`} />
        </Animated.View>

        <Animated.View
          style={[
            Layout.center,
            styles.floatButton,
            styles.expenseIcon,
            expenseIconStylez,
          ]}>
          <ExpenseIcon height={32} width={32} viewBox={`0 0 ${32} ${32}`} />
        </Animated.View>
      </Animated.View>
    </>
  );
});

export const HomeActionIcon = HomeActionIconComponent;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: Colors.backdrop.default,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: kWidth,
  },
  exchangeIcon: {
    backgroundColor: Colors.blue.default,
  },
  expenseIcon: {
    backgroundColor: Colors.red.default,
  },
  floatButton: {
    borderRadius: scale(IconSize / 2),
    height: scale(IconSize),
    position: 'absolute',
    width: scale(IconSize),
  },
  incomeIcon: {
    backgroundColor: Colors.green.light,
  },
  plusIcon: {
    backgroundColor: '#438883',
    borderRadius: scale(IconSize / 2),
    height: scale(IconSize),
    position: 'absolute',
    shadowColor: '#549994',
    top: topz,
    width: scale(IconSize),
    zIndex: 999,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
