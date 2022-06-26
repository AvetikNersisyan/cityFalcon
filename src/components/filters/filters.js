import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Icons} from '../../icons';
import {THEME} from '../../themes/theme';

export const FilterButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icons.Funnel />
      <Text
        style={{
          textAlign: 'center',
        }}>
        Filters
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: THEME.SIZES.margin,
    borderWidth: 1,
    borderColor: THEME.COLORS.gray,
  },
});
