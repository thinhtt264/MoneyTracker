import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '@components';
import { useAppStore } from '@store';
import { useInterpolate, useSharedTransition } from '@common';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors, Layout } from '@themes';

const HomeScreen = () => {
  const tr = useSharedValue(0);
  const translateY = useInterpolate(tr, [0, 1], [0, 300], 'clamp');

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={Layout.fill}>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey.body,
    flex: 1,
  },
});
