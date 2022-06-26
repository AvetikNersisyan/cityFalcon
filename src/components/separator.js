import React from 'react';
import {View} from 'react-native';
import {THEME} from '../themes/theme';

export const Separator = ({customStyles}) => {
  return (
    <View style={[{marginVertical: THEME.SIZES.margin}, customStyles]}></View>
  );
};
