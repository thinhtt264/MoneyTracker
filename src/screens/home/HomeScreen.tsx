import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearHeader } from 'src/components/header';
import { HeaderComponent } from './components';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <LinearHeader children={<HeaderComponent />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
