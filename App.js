/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Header} from './src/components/header';
import {useFetchData} from './src/hooks/useFetchData';
import {MainLayout} from './src/layouts/mainLayout';
import {THEME} from './src/themes/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [data, setData] = useState(null);

  const [fetch, status] = useFetchData(setData);

  console.log(data, 'data');

  useEffect(() => {
    fetch();
  }, []);

  return (
    <MainLayout>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          height: THEME.SIZES.padding * 8,
        }}>
        <Header />

        <Text>first step</Text>
      </View>
    </MainLayout>
  );
};

export default App;
