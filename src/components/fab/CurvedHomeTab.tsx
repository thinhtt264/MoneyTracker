import React, { memo } from 'react';
import { isIos, scale } from '@common';
import { CurvedIcon } from '@components';
import { Layout } from '@themes';
import { StyleSheet, View } from 'react-native';
import isEqual from 'react-fast-compare';
const width = isIos ? scale(120) : scale(120);
const height = isIos ? scale(50) : scale(50);
const CurvedComponent = ({ color = 'white' }) => {
  return (
    <View style={[Layout.colHCenter, styles.curved]}>
      <CurvedIcon
        color={color}
        height={height}
        width={width}
        viewBox={`0 0 ${100} ${50}`}
      />
    </View>
  );
};
export const CurvedHomeTab = memo(CurvedComponent, isEqual);

const styles = StyleSheet.create({
  curved: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -9999,
  },
});
