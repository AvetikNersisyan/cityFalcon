import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icons} from '../icons';
import {THEME} from '../themes/theme';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/img/logoMain.png')}
        />
      </View>

      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/img/avatar.png')}
        />
        <Icons.ArrowDown fill={THEME.COLORS.textColorDark} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: THEME.SIZES.padding,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.white,
    borderBottomColor: THEME.COLORS.gray,
    borderBottomWidth: 1,
    paddingRight: THEME.SIZES.padding * 2,
  },
  logoContainer: {
    width: 154,
    height: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    flexDirection: 'row',
    height: 35,
    width: 35,
    // marginRight: 30,
  },
  avatar: {
    height: '100%',
    width: '100%',
  },
});
