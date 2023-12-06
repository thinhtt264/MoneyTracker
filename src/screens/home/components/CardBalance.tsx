import {
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import Layout from 'src/themes/Layout';
import { ArrowBoxDownIcon, BoldText, SemiBoldText } from 'src/components';
import { fontScale, formatCurrency, scale, translate } from 'src/common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Colors from 'src/themes/Colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  total: string;
  income: string;
  expense: string;
  onPressExpand: () => void;
  isExpand: boolean;
};

const CardBalanceComponent = ({
  total,
  income,
  expense,
  onPressExpand,
  isExpand = true,
}: Props) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [wrapHeight, setWrapHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height / 1.55);
  };

  const onWrapLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;

    if (height > 0 && height !== wrapHeight) {
      setWrapHeight(height + scale(20));
    }
  };

  const iconAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = isExpand ? '180deg' : '0deg';

    return {
      transform: [{ rotate: withTiming(rotateValue) }],
    };
  }, [isExpand]);

  const wrapAnimatedStyle = useAnimatedStyle(() => {
    'worklet';
    animatedHeight.value = isExpand ? withTiming(wrapHeight) : withTiming(0);
    return {
      height: animatedHeight.value,
    };
  }, [isExpand]);

  const onPressIcon = useCallback(() => {
    onPressExpand();
  }, [onPressExpand]);

  return (
    <View
      style={[
        Layout.boxShadow,
        styles.container,
        { transform: [{ translateY: -containerHeight }], overflow: 'hidden' },
      ]}
      onLayout={onContainerLayout}>
      <View style={[Layout.rowBetween]}>
        <View style={[Layout.rowVCenter, styles.gap]}>
          <BoldText textStyle={styles.text}>
            {translate('home:totalbalance')}
          </BoldText>
          <TouchableOpacity activeOpacity={1} onPress={onPressIcon}>
            <Animated.View style={[Layout.center, iconAnimatedStyle]}>
              <Ionicons
                name="chevron-up"
                size={scale(20)}
                color={Colors.white.default}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
        <SimpleLineIcons
          name="options"
          size={scale(22)}
          color={Colors.white.default}
        />
      </View>

      <View style={{ marginTop: scale(5) }}>
        <BoldText textStyle={styles.total}>{formatCurrency(total)}</BoldText>
      </View>

      <Animated.View style={[wrapAnimatedStyle]}>
        <View onLayout={onWrapLayout} style={[Layout.rowBetween, styles.wrap]}>
          <View style={[styles.gap]}>
            <View style={[Layout.rowVCenter, styles.gap]}>
              <ArrowBoxDownIcon size={scale(22)} />
              <SemiBoldText
                textStyle={[styles.text, { color: Colors.green.lighter1 }]}>
                {translate('home:income')}
              </SemiBoldText>
            </View>

            <BoldText textStyle={[styles.text, styles.income]}>
              {formatCurrency(income)}
            </BoldText>
          </View>

          <View style={[styles.gap]}>
            <View style={[Layout.rowVCenter, styles.gap]}>
              <ArrowBoxDownIcon size={scale(22)} />
              <SemiBoldText
                textStyle={[styles.text, { color: Colors.green.lighter1 }]}>
                {translate('home:expense')}
              </SemiBoldText>
            </View>
            <BoldText textStyle={[styles.text, styles.expense]}>
              {formatCurrency(expense)}
            </BoldText>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export const CardBalance = memo(CardBalanceComponent, isEqual);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green.darker,
    marginHorizontal: scale(15),
    paddingHorizontal: scale(15),
    paddingVertical: scale(20),
    shadowColor: Colors.green.darker,
    borderRadius: scale(20),
  },
  text: {
    color: Colors.white.default,
  },
  title: {},
  total: {
    color: Colors.white.default,
    fontSize: fontScale(26),
  },
  gap: {
    gap: scale(5),
  },
  income: {
    fontSize: fontScale(20),
    marginLeft: scale(2),
  },
  expense: {
    fontSize: fontScale(20),
    alignSelf: 'flex-end',
  },
  wrap: {
    position: 'absolute',
    top: scale(25),
    width: '100%',
  },
});
