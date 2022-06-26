import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PublicationItem} from './feedItems/publicationItem';
import {Separator} from './separator';

export const MainContent = ({data, onEndReached}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <PublicationItem item={item} />;
        }}
        ItemSeparatorComponent={({}) => <Separator />}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
