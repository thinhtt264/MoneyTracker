import { FlatList } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { AnimatedListProps } from './type';

const List = Animated.createAnimatedComponent(FlatList);

const AnimatedList = (props: AnimatedListProps<any>) => {
  const {
    data,
    renderItem,
    renderFooter,
    renderHeader,
    flatlistRef = null,
  } = props;

  return (
    <List
      {...props}
      ref={flatlistRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      removeClippedSubviews
      scrollEventThrottle={16}
      initialNumToRender={5}
      onEndReachedThreshold={0.01}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...(renderHeader && { ListHeaderComponent: renderHeader })}
      {...(renderFooter && { ListFooterComponent: renderFooter })}
    />
  );
};

export default AnimatedList;
