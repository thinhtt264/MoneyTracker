/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { kHeight, kWidth } from '@common/constants';
import Colors from './Colors';
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default StyleSheet.create({
  /* Container */
  containerCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  /* Column Layouts */
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  colCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colHCenter: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  colVCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  /* Row Layouts */
  row: {
    flexDirection: 'row',
  },
  rowBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowHBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  rowVReverse: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowHCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowVCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  /* Text Input */

  boxShadow: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  /* Shadow */
  shadow: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  /* Text Color */
  textContent: {
    color: Colors.black.default,
  },
  textNote: {
    color: Colors.black.default,
  },
  textTitle: {
    color: Colors.black.default,
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  /* Sizes Layouts */
  fill: {
    flex: 1,
  },
  fullDevice: {
    height: kHeight,
    width: kWidth,
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  fillAbsolute: {
    flex: 1,
    position: 'absolute',
    zIndex: 999,
  },
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  /* Operation Layout */
  mirror: {
    transform: [{ scaleX: -1 }],
  },
  rotate90: {
    transform: [{ rotate: '90deg' }],
  },
  rotate90Inverse: {
    transform: [{ rotate: '-90deg' }],
  },
  /* Text Layout */
  whiteBg: {
    backgroundColor: Colors.white.default,
  },
  textCenter: {
    textAlign: 'center',
  },
  whiteText: {
    color: Colors.white.default,
  },
});
