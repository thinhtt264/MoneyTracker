import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CustomTextProps } from './type';
import { useTheme } from '@themes';
import { FONT_FAMILY, fontScale } from '@common';
import isEqual from 'react-fast-compare';

const RegularTextComponents = (props: CustomTextProps) => {
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
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: fontScale(14),
  },
});

export const RegularText = memo(RegularTextComponents, isEqual);
