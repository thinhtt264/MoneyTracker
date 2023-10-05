import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import equals from 'react-fast-compare';
import layout from 'src/themes/Layout';
import { kHeight, kWidth } from 'src/common/constants';
import Colors from 'src/themes/Colors';
import { BoldText } from 'src/components/text';
import { Button } from 'src/components/button';
import { useAppDispatch } from 'src/common/redux';
import { appActions } from 'src/store/action-slices';
import { translate } from 'src/common/language';
import { fontScale, scale } from 'src/common/scale';
import { Images } from 'src/assests';

interface Props {}

const IntroductionComponent = () => {
  const dispatch = useAppDispatch();
  const onStart = () => {
    dispatch(appActions.onFirstTimeLauch());
  };
  return (
    <View style={[layout.fill, styles.container]}>
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
        <Button
          title={translate('auth:start')}
          onPress={onStart}
          fullSize
          textStyle={{ fontSize: fontScale(15) }}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export const IntroductionScreen = memo(IntroductionComponent, equals);

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.white.default },
  imageBackground: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -scale(10),
    height: kHeight / 2,
    width: '100%',
  },
  slogan: {
    fontSize: fontScale(25),
    textAlign: 'center',
    color: Colors.green.darker,
  },
  btn: { marginTop: scale(20), shadowColor: Colors.green.medium },
});
