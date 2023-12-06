import { ImageBackground, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import Layout from 'src/themes/Layout';
import equals from 'react-fast-compare';
import { scale } from 'src/common/scale/index';
import { Images } from 'src/assests';
import { HeaderProps } from './type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const LinearHeaderComponent = ({ children, isExpand }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: isExpand ? withTiming('35%') : withTiming('30%'),
    };
  }, [isExpand]);

  return (
    <Animated.View style={animatedStyle}>
      <ImageBackground
        style={[styles.bg]}
        resizeMode="stretch"
        source={Images.background_header}>
        <View
          style={[
            Layout.rowVCenter,
            styles.wrap,
            { marginTop: insets.top + scale(40) },
          ]}>
          {children ? children : <View style={[]}></View>}
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export const LinearHeader = memo(LinearHeaderComponent, equals);

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  wrap: { justifyContent: 'space-between', paddingHorizontal: scale(20) },
});
