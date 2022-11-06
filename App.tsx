import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AppNavigator } from './src/navigators/app-navigator';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </>
  );
}
