/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

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
import {FilterOptions} from './src/components/filters/filterOptions';
import {FilterButton} from './src/components/filters/filters';
import {Header} from './src/components/header';
import {MainContent} from './src/components/mainContent';
import {useFetchData} from './src/hooks/useFetchData';
import {MainLayout} from './src/layouts/mainLayout';
import {THEME} from './src/themes/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [data, setData] = useState(null);
  const [token, setToken] = useState(data?.next_page_token);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [visible, setVisible] = useState(false);

  const addNewData = newData => {
    setToken(newData.next_page_token);
    if (data) {
      setData([...data, ...newData.stories]);
    } else {
      setData(newData.stories);
    }
  };

  const [fetch, status] = useFetchData(addNewData, [
    'next_page_token=' + token,
    'limit=20',
  ]);

  useEffect(() => {
    fetch();
  }, [shouldFetch]);

  const onEndReached = () => {
    setShouldFetch(p => !p);
  };

  const onOpenFilters = () => {
    setVisible(p => !p);
  };

  return (
    <MainLayout>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          height: THEME.SIZES.padding * 8,
        }}>
        <Header />
      </View>

      {/* <FilterOptions visible={visible} /> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text>Watchlist</Text>
        </View>
        <FilterButton onPress={onOpenFilters} />
      </View>

      {data ? (
        <MainContent status={status} onEndReached={onEndReached} data={data} />
      ) : (
        <ActivityIndicator animating={true} />
      )}
    </MainLayout>
  );
};

export default App;
