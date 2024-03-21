/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Colors } from '@themes';
import { hasNotch } from 'react-native-device-info';
import { HomeScreen } from '@screens';
import { scale } from '@common';
import {
  ChartIcon,
  CreditCardIcon,
  HomeActionIcon,
  ProfileIcon,
} from '@components';
import Octicons from 'react-native-vector-icons/Octicons';

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

const TabBar = (
  fabRef: React.MutableRefObject<any>,
  isOpenFab: Boolean,
  props: BottomTabBarProps,
) => {
  const { state, descriptors, navigation, insets } = props;

  return (
    <View
      style={[
        styles.container,
        {
          bottom: insets.bottom || scale(20),
          backgroundColor: isOpenFab ? Colors.white.default : Colors.grey.body,
        },
      ]}>
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
                const isOpenFAB = fabRef.current?.isOpen();
                fabRef.current?.toggle();
                setTimeout(
                  () => navigation.navigate(route.name),
                  isOpenFAB ? 150 : 0,
                );
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
              <View>
                <HomeIcon
                  fabRef={fabRef}
                  color={Colors.white.default}
                  size={scale(25)}
                  name={label.toString()}
                />
              </View>
            </View>
          ) : null;
        })}
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const fabRef = useRef<any>(null);
  const [isOpenFab, setOpenFab] = useState<Boolean>(false);

  const isOpenObserver = (isOpen: Boolean) => {
    setOpenFab(isOpen);
  };

  useEffect(() => {
    if (fabRef.current) {
      fabRef.current.isOpenObservable(isOpenObserver);
    }
  }, [fabRef.current]);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        tabBar={props => TabBar(fabRef, isOpenFab, props)}>
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
  homeIcon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default HomeTab;
