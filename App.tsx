import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AppNavigator } from './src/navigators/app-navigator';
import { AuthProvider } from './src/context/auth-context';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <AuthProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </AuthProvider>
  );
}
