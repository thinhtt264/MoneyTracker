import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Layout } from '@themes';
import LinearGradient from 'react-native-linear-gradient';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#CFF9FF', '#F8EDD8']}
        locations={[0.6, 1]}
        style={[styles.gradient, Layout.fullSize]}
      />
    </View>
  );
};

export const Header = memo(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: '40%',
    width: '100%',
  },
  gradient: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -999,
  },
});
