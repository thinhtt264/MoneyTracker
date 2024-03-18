import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, Text } from 'react-native';
import { CustomTextProps } from './type';
import { useTheme } from '@themes';
import { FONT_FAMILY, fontScale } from '@common';

const BoldTextComponents = (props: CustomTextProps) => {
  const theme = useTheme();
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[{ color: theme.colors.text }, styles.text, props.textStyle]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: fontScale(16),
    fontWeight: 'bold',
  },
});

export const BoldText = memo(BoldTextComponents, isEqual);
