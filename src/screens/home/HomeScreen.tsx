import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearHeader } from 'src/components/header';
import { CardBalance, HeaderComponent } from './components';

const HomeScreen = () => {
  const [isExpand, setExpand] = useState(false);

  const onPressExpand = () => {
    setExpand(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <LinearHeader children={<HeaderComponent />} isExpand={isExpand} />
      <CardBalance
        total={'2485654'}
        income="1,840.00"
        expense="284.00"
        onPressExpand={onPressExpand}
        isExpand={isExpand}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
