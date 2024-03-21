import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useAppStore } from '@store';
import { Colors, Layout } from '@themes';
import { PortalHost } from '@gorhom/portal';

const HomeScreen = () => {
  return (
    <View style={Layout.fill}>
      <PortalHost name="BackDropFabHost" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey.body,
    flex: 1,
  },
});
