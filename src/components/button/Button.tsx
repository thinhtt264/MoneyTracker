import React, { memo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import equals from 'react-fast-compare';
import { scale } from 'src/common/scale';
import Colors from 'src/themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BoldText } from '../text';
import layout from 'src/themes/Layout';
import { ButtonProps } from './type';
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
      onPress={onPress}
      disabled={disable}
      style={[
        layout.center,
        layout.shadow,
        styles.container,
        {
          height:
            size === 'default' || size === undefined ? scale(50) : scale(50),
          paddingHorizontal:
            size === 'default' || size === undefined ? scale(20) : scale(15),
          backgroundColor: outline
            ? 'transparent'
            : disable
            ? Colors.text.disable
            : Colors.green.medium,
          alignSelf: 'center',
          width: fullSize ? '100%' : 'auto',
          borderWidth: outline ? 1 : 0,
          borderColor: Colors.green.default,
        },
        style,
      ]}
      {...Props}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {},
});

export const Button = memo(ButtonComponent, equals);
