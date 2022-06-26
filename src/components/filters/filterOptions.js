import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {LANGUAGES} from '../../constants/filterOptionData';
import {DropDown} from './dropdown';

export const FilterOptions = ({visible}) => {
  return (
    <View style={styles.container}>
      <DropDown items={LANGUAGES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
