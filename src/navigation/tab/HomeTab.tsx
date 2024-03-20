/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { Colors, Layout } from '@themes';
import { hasNotch } from 'react-native-device-info';
import { HomeScreen } from '@screens';
import { isIos, scale } from '@common';
import {
  ChartIcon,
  CreditCardIcon,
  CurvedIcon,
  HomeActionIcon,
  ProfileIcon,
} from '@components';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  size: number;
  color: string;
  name?: string;
  fabRef?: any;
}
const HomeIcon = (props: Props) => {
  const { name, fabRef } = props;
  return (
    <View style={styles.homeIcon}>
      {name !== 'Plus' ? (
        <View>{renderIcon(props)}</View>
      ) : (
        <HomeActionIcon ref={fabRef} />
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

const CurvedComponent = () => {
  const width = isIos ? scale(120) : scale(120);
  const height = isIos ? scale(50) : scale(50);
  return (
    <View style={[Layout.colHCenter, styles.curved]}>
      <CurvedIcon
        color={'rgb(242, 242, 242)'}
        height={height}
        width={width}
        viewBox={`0 0 ${100} ${50}`}
      />
    </View>
  );
};
const TabBar = (
  fabRef: React.MutableRefObject<any>,
  bottom: number,
  props: BottomTabBarProps,
) => {
  const { state, descriptors, navigation } = props;
  return (
    <View style={[styles.container, { bottom }]}>
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
              // navigation.navigate<RouteNames>('HomeScreen');
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
              <HomeIcon
                color={isFocused ? '#549994' : Colors.unActive}
                size={scale(25)}
                name={label.toString()}
              />
            </TouchableOpacity>
          ) : state.index === 0 ? (
            <View
              key={label.toString()}
              style={{
                flex: 1,
                alignItems: 'center',
                height: TAB_HEIGHT,
              }}>
              <CurvedComponent />
              <Animated.View
                entering={FadeInDown.duration(100).springify()}
                exiting={FadeOutDown.duration(100)}>
                <HomeIcon
                  fabRef={fabRef}
                  color={Colors.white.default}
                  size={scale(25)}
                  name={label.toString()}
                />
              </Animated.View>
            </View>
          ) : null;
        })}
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const { bottom } = useSafeAreaInsets();
  const fabRef = useRef<any>(null);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={props => TabBar(fabRef, isIos ? bottom : scale(20), props)}>
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
    left: scale(20),
    position: 'absolute',
    right: scale(20),
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  curved: {
    position: 'absolute',
    top: 0,
    zIndex: -999,
  },
  homeIcon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default HomeTab;
