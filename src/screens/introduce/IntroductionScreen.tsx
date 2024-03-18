import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BoldText } from '@components';
import { Colors, Layout } from '@themes';
import { fontScale, kHeight, scale, translate } from '@common';
import { Images } from '@assests';

const IntroductionComponent = () => {
  const onStart = () => {};

  return (
    <View style={[Layout.fill, styles.container]}>
      <View style={{ height: '65%' }}>
        <Image style={styles.imageBackground} source={Images.onboarding_logo} />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={Images.onboarding_shape}
        />
      </View>
      <View style={{ marginTop: scale(20), paddingHorizontal: scale(30) }}>
        <BoldText textStyle={styles.slogan}>
          {translate('auth:slogan', { value: '\n' })}
        </BoldText>
        {/* <Button
          activeOpacity={1}
          title={translate('auth:start')}
          onPress={onStart}
          fullSize
          textStyle={{ fontSize: fontScale(15) }}
          style={styles.btn}
        /> */}
      </View>
    </View>
  );
};

export const IntroductionScreen = IntroductionComponent;

const styles = StyleSheet.create({
  btn: {
    elevation: 5,
    marginTop: scale(20),
    shadowColor: Colors.green.medium,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  container: { backgroundColor: Colors.white.default },
  image: {
    bottom: -scale(10),
    height: kHeight / 2,
    left: 0,
    position: 'absolute',
    right: 0,
    width: '100%',
  },
  imageBackground: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    resizeMode: 'contain',
    right: 0,
  },
  slogan: {
    color: Colors.green.darker,
    fontSize: fontScale(25),
    textAlign: 'center',
  },
});
