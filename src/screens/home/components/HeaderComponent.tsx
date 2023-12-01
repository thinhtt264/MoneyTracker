import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import Layout from 'src/themes/Layout';
import { BoldText, RegularText } from 'src/components/text';
import Colors from 'src/themes/Colors';
import { fontScale, scale } from 'src/common/scale';
import { translate } from 'src/common/language';
import { BellIcon } from 'src/components/svg';
import isEqual from 'react-fast-compare';

type Props = {};

export const HeaderComponent = memo((props: Props) => {
  return (
    <>
      <View style={[Layout.colVCenter]}>
        <RegularText
          textStyle={{
            color: Colors.white.default,
            fontSize: fontScale(15),
          }}>
          {translate('home:hello')},
        </RegularText>
        <BoldText
          textStyle={{
            fontSize: fontScale(20),
            color: Colors.white.default,
          }}>
          Enjelin Morgeana
        </BoldText>
      </View>
      <View style={styles.bellIcon}>
        <BellIcon
          size={scale(30)}
          color={Colors.orange.copper}
          viewBox={`0 0 ${scale(30)} ${scale(30)}`}
        />
      </View>
    </>
  );
}, isEqual);

const styles = StyleSheet.create({
  bellIcon: {
    marginTop: -scale(5),
    width: scale(30),
    height: scale(30),
    backgroundColor: '#FFFFFF0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
