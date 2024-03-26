import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, Layout } from '@themes';
import { PortalHost } from '@gorhom/portal';
import { Button, RainbowCircle } from '@components';
import { scale } from '@common';
import { Header } from './components';

const HomeScreen = () => {
  return (
    <>
      <View style={Layout.fill}>
        <Header />
      </View>
      <PortalHost name="BackDropFabHost" />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey.body,
    flex: 1,
  },
});
