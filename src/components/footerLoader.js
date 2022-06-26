import React from 'react';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native';
import {STATUS} from '../hooks/useFetchData';

export const FooterLoader = ({status}) => {
  console.log(status, 'status');
  if (status !== STATUS.LOADING) return null;

  return (
    <View>
      <ActivityIndicator animating />
    </View>
  );
};
