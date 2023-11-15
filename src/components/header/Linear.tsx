import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import equals from 'react-fast-compare';
import { LinearView } from '../linearview';
import layout from 'src/themes/layout';
import { translate } from '../../utils/i18n/translate';
import { BoldText } from '../text';
import { fontScale, scale } from '../../common/scale/index';
import Colors from 'src/themes/Colors';
import { RegularText } from '../text/RegularText';
import { BellIcon } from '../svg/Icon';

type Props = {};

const LinearHeaderComponent = (props: Props) => {
  return (
    <LinearView
      colors={['#429690', '#2A7C76']}
      style={[layout.fill, styles.container]}>
      <View
        style={[
          layout.column,
          {
            marginTop: scale(35),
            paddingHorizontal: scale(20),
          },
        ]}>
        <RegularText
          textStyle={{
            color: Colors.white.default,
            fontSize: fontScale(15),
          }}>
          {translate('home:hello')},
        </RegularText>
        <View style={[layout.rowHBetween]}>
          <BoldText
            textStyle={{
              fontSize: fontScale(20),
              color: Colors.white.default,
            }}>
            Enjelin Morgeana
          </BoldText>
          <View style={styles.bellIcon}>
            <BellIcon
              color={Colors.orange.copper}
              height={scale(25)}
              width={scale(25)}
              viewBox={`0 0 ${scale(22)} ${scale(22)}`}
            />
          </View>
        </View>
      </View>
    </LinearView>
  );
};

export const LinearHeader = memo(LinearHeaderComponent, equals);

const styles = StyleSheet.create({
  container: {},
  bellIcon: {
    marginTop: -scale(5),
    width: scale(30),
    height: scale(30),
    backgroundColor: '#FFFFFF0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});