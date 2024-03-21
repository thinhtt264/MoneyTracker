import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, Layout } from '@themes';
import { PortalHost } from '@gorhom/portal';
import { Button } from '@components';

const HomeScreen = () => {
  return (
    <>
      <View style={Layout.fill}>
        <View style={{ height: 30, backgroundColor: 'red' }} />
        <Button />
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
