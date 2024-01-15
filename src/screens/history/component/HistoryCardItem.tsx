import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';

type Props = {};

const HistoryCardItemComponent = ({}: Props) => {
  return (
    <View>
      <Text>HistoryCardItem</Text>
    </View>
  );
};

export const HistoryCardItem = memo(HistoryCardItemComponent, isEqual);

const styles = StyleSheet.create({});
