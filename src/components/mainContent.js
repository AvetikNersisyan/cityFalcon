import React from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text, FlatList} from 'react-native';
import {STATUS} from '../hooks/useFetchData';
import {PublicationItem} from './feedItems/publicationItem';
import {FooterLoader} from './footerLoader';
import {Separator} from './separator';

export const MainContent = ({data, onEndReached, status}) => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.uuid + Math.random()} // TODO items are not unique, so decided to use random Id's :)
        data={data}
        renderItem={({item, index}) => {
          return <PublicationItem item={item} />;
        }}
        ItemSeparatorComponent={({}) => <Separator />}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.6}
        refreshing={status === STATUS.LOADING}
        // ListFooterComponent={<FooterLoader status={status} />}
        onRefresh={() => console.log('refresh')}
      />
    </View>
  );
};
