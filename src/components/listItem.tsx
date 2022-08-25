import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import type {Item} from '../items';

export const ITEM_HEIGHT = 80;

type Props = {
  index: number;
  numItems: number;
  scrollOffset: SharedValue<number>;
  maxScrollOffset: SharedValue<number>;
  item: Item;
};

export const ListItem: React.FC<Props> = ({
  index,
  numItems,
  scrollOffset,
  maxScrollOffset,
  item,
}) => {
  const animatedElasticStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-15, 0, maxScrollOffset.value, maxScrollOffset.value + 15],
          [index * 2, 0, 0, (index - numItems - 1) * 2],
          Extrapolation.EXTEND,
        ),
      },
    ],
  }));

  console.log(item.img);

  return (
    <Animated.View key={index} style={[animatedElasticStyles, styles.wrapper]}>
      <View style={styles.container}>
        <Image source={{uri: item.img}} style={styles.img} />
        <View>
          <Text>{'No: ' + item.no}</Text>
          <Text>{item.name}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    height: ITEM_HEIGHT,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  img: {
    width: 48,
    height: 48,
  },
});
