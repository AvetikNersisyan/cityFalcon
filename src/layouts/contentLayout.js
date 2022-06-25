import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {THEME} from '../themes/theme';

export const ContentLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{children}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.SIZES.padding * 2,
    backgroundColor: THEME.COLORS.white2,
  },
});
