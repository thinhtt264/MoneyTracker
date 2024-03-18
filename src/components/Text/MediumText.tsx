import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { CustomTextProps } from './type';
import isEqual from 'react-fast-compare';
import { FONT_FAMILY, fontScale } from '@common';
import { useTheme } from '@themes';

const MediumTextComponents = (props: CustomTextProps) => {
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
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: fontScale(14),
    fontWeight: '500',
  },
});

export const MediumText = memo(MediumTextComponents, isEqual);
