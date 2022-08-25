import React, {useCallback, useMemo, useRef} from 'react';
import {ListRenderItem, FlatList} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DEVICE_HEIGHT} from '../commons';
import {type Item, ITEMS} from '../items';
import {ListHeader} from './listHeader';
import {ITEM_HEIGHT, ListItem} from './listItem';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList<Item>);

const keyExtractor = (item: Item) => item.name;
const getItemLayout = (_: any, index: number) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
});

export const List: React.FC = () => {
  const ref = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();
  const scrollOffset = useSharedValue(0);
  const maxScrollOffset = useDerivedValue(
    () =>
      insets.top +
      insets.bottom +
      ITEMS.length * ITEM_HEIGHT +
      100 -
      DEVICE_HEIGHT,
    [insets.top, insets.bottom],
  );

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  const renderItem: ListRenderItem<Item> = useCallback(
    ({index, item}) => (
      <ListItem
        numItems={ITEMS.length}
        maxScrollOffset={maxScrollOffset}
        scrollOffset={scrollOffset}
        item={item}
        index={index}
      />
    ),
    [maxScrollOffset, scrollOffset],
  );

  const style = useMemo(
    () => ({
      paddingBottom: insets.bottom,
      paddingTop: insets.top + 20,
      paddingHorizontal: 16,
    }),
    [insets.bottom, insets.top],
  );

  return (
    <AnimatedFlatlist
      ref={ref}
      data={ITEMS}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      initialNumToRender={Math.round(DEVICE_HEIGHT / 40)}
      onScroll={onScroll}
      scrollEventThrottle={16}
      contentContainerStyle={[style]}
      ListHeaderComponent={ListHeader}
    />
  );
};
