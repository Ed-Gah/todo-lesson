/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,

  StatusBar,
  StyleSheet,

  useColorScheme,

} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Todo from './src/components/Todo';
import { Test } from './src/components/Test';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
    <Todo />
    {/* <Test /> */}
    </SafeAreaView>
  );
}

export default App;
