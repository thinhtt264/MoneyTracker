import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import equals from 'react-fast-compare';
import { fontScale } from 'src/common/scale';
import { FONT_FAMILY } from 'src/common/constants';
import { CustomTextProps } from './type';
import { useTheme } from '@react-navigation/native';

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
    fontSize: fontScale(14),
    fontFamily: FONT_FAMILY.REGULAR,
  },
});

export const RegularText = memo(RegularTextComponents, equals);
