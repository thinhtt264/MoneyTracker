import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearHeader } from 'src/components/header';
import { CardBalance, HeaderComponent } from './components';
import { AnimatedList } from 'src/components/list';
import { HistoryCardItem } from '../history/component';

const HomeScreen = () => {
  const [isExpand, setExpand] = useState(false);
  const [cardBalanceHeight, setCardBalanceHeight] = useState(0);

  const onPressExpand = () => {
    setExpand(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <LinearHeader children={<HeaderComponent />} isExpand={isExpand} />
      <CardBalance
        total={'2485654'}
        income="184000"
        expense="28400"
        onPressExpand={onPressExpand}
        isExpand={isExpand}
        cardBalanceHeight={cardBalanceHeight}
        setCardBalanceHeight={setCardBalanceHeight}
      />
      <AnimatedList
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 34, 25, 345, 3453, 34,
        ]}
        style={{ marginTop: -cardBalanceHeight + 30 }}
        renderItem={({ item }: any) => <HistoryCardItem />}
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
