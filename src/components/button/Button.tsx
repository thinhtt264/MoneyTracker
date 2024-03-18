/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import equals from 'react-fast-compare';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BoldText } from '../text';
import { ButtonProps } from './type';
import { Colors, Layout } from '@themes';
import { scale } from '@common';
import LinearGradient from 'react-native-linear-gradient';
const ButtonComponent = (props: ButtonProps) => {
  const {
    title,
    outline,
    fullSize,
    disable = false,
    style,
    iconLeft,
    iconRight,
    textStyle,
    size,
    onPress,
    ...Props
  } = props;
  return (
    <TouchableOpacity
      style={[style, styles.shadowContainer]}
      onPress={onPress}
      disabled={disable}
      {...Props}>
      <LinearGradient
        start={{ x: 0.463513573319529, y: -0.17187500385138885 }}
        end={{ x: 0.46351357331952914, y: 1.2343749620971305 }}
        colors={['#68aea9', '#3e8681']} //design
        style={[
          Layout.center,
          styles.container,
          {
            height:
              size === 'default' || size === undefined ? scale(50) : scale(50),
            paddingHorizontal:
              size === 'default' || size === undefined ? scale(20) : scale(15),
            width: fullSize ? '100%' : 'auto',
          },
        ]}>
        <BoldText
          textStyle={[
            styles.text,
            { color: outline ? Colors.green.darker : Colors.white.default },
            textStyle,
          ]}>
          {title}
        </BoldText>
        {iconRight && (
          <Icon
            name={iconRight.name ?? ''}
            size={iconRight.size}
            color={iconRight.color}
            style={{ marginLeft: scale(5) }}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: Colors.green.default,
    borderRadius: 25,
    flexDirection: 'row',
    ...Platform.select({
      android: {
        shadowColor: Colors.green.darker1,
        elevation: 12,
      },
    }),
  },
  shadowContainer: {
    backgroundColor: Colors.green.medium,
    borderRadius: 25,
    shadowColor: Colors.green.medium,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  text: {},
});

export const Button = memo(ButtonComponent, equals);
