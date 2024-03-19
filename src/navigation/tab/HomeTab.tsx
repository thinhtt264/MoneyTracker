/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-color-literals */
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { Colors, Layout } from '@themes';
import { hasNotch } from 'react-native-device-info';
import { HomeScreen } from '@screens';
import { RouteNames } from '@navigation';
import { kWidth, scale } from '@common';
import { ChartIcon, CreditCardIcon, ProfileIcon } from '@components';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIos } from '../../common/device/index';

interface Props {
  size: number;
  color: string;
  name?: string;
}
const HomeIcon = (props: Props) => {
  const { size, color, name } = props;
  return (
    <View style={styles.homeIcon}>
      {name !== 'Plus' ? (
        <View>{renderIcon(props)}</View>
      ) : (
        <View style={styles.plusIcon}>
          <View style={[Layout.center, Layout.fill]}>
            <Octicons name="plus" size={size} color={color} />
          </View>
        </View>
      )}
    </View>
  );
};

const renderIcon = (props: Props) => {
  const { size, color, name } = props;
  switch (name) {
    case 'Home': {
      return <Octicons name="home" size={size} color={color} />;
    }
    case 'Chart': {
      return (
        <ChartIcon
          height={size}
          width={size}
          viewBox={`0 0 ${scale(28)} ${scale(27)}`}
          color={color}
        />
      );
    }
    case 'Card': {
      return (
        <CreditCardIcon
          height={scale(28)}
          width={scale(35)}
          viewBox={`0 0 ${scale(14)} ${scale(14)}`}
          color={color}
        />
      );
    }
    case 'Profile': {
      return (
        <ProfileIcon
          height={scale(30)}
          width={scale(25)}
          viewBox={`0 0 ${scale(20)} ${scale(22)}`}
          color={color}
        />
      );
    }
  }
};
const TabBar = (props: BottomTabBarProps, bottom: number) => {
  const { state, descriptors, navigation } = props;
  return (
    <View style={[styles.container, { bottom: isIos ? bottom : scale(20) }]}>
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            if (label.toString() !== 'Plus') {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            } else {
              navigation.navigate<RouteNames>('HomeScreen');
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return label.toString() !== 'Plus' ? (
            <TouchableOpacity
              key={label.toString()}
              onPress={onPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: TAB_HEIGHT,
              }}>
              <View>
                <HomeIcon
                  color={isFocused ? '#549994' : Colors.unActive}
                  size={scale(25)}
                  name={label.toString()}
                />
              </View>
            </TouchableOpacity>
          ) : state.index === 0 ? (
            <TouchableOpacity
              key={label.toString()}
              onPress={onPress}
              style={{ flex: 1, alignItems: 'center', height: TAB_HEIGHT }}>
              <Animated.View
                entering={FadeInDown.duration(100).springify()}
                exiting={FadeOutDown.duration(100)}>
                <HomeIcon
                  color={Colors.white.default}
                  size={scale(25)}
                  name={label.toString()}
                />
              </Animated.View>
            </TouchableOpacity>
          ) : null;
        })}
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={props => TabBar(props, isIos ? bottom : scale(20))}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chart" component={HomeScreen} />
        <Tab.Screen name="Plus" component={HomeScreen} />
        <Tab.Screen name="Card" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </View>
  );
};

const TAB_HEIGHT = hasNotch() ? scale(65) : scale(60);
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white.default,
    borderRadius: scale(20),
    elevation: 2,
    height: TAB_HEIGHT,
    left: 20,
    position: 'absolute',
    right: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  homeIcon: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  plusIcon: {
    backgroundColor: '#438883',
    position: 'absolute',
    shadowColor: '#549994',
    ...Platform.select({
      ios: {
        top: -scale(55 / 2),
        width: scale(55),
        borderRadius: scale(55 / 2),
        height: scale(55),
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        top: -scale(52 / 2),
        width: scale(52),
        borderRadius: scale(52 / 2),
        height: scale(52),
        elevation: 10,
      },
    }),
  },
});
export default HomeTab;
