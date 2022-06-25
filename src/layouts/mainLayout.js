import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {THEME} from '../themes/theme';

export const MainLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{children}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.SIZES.padding * 7,
  },
});
