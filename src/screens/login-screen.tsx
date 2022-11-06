import * as React from 'react';
import { SafeAreaView, Text, useColorScheme } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';
import { Button } from '../components/button';

import { authenticateAsync } from 'expo-local-authentication';

const Colors = {
  white: '#ffffff',
  black: '#000000',
};

export function LoginScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  function onPressAuthenticate() {
    authenticateAsync().then((result) => {
      // setAuth(result.success);
      console.log(`set auth state to ${result.success}`);
    });
  }

  return (
    <SafeAreaView style={wrapperStyle}>
      <Text
        style={[
          warningTextStyle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        Set authentication to proceed
      </Text>
      <Button onPress={onPressAuthenticate} text="Login" />
    </SafeAreaView>
  );
}

const wrapperStyle: ViewStyle = {
  flex: 1,
  justifyContent: 'flex-end',
};

const warningTextStyle: TextStyle = {
  fontSize: 18,
  textAlign: 'center',
  marginBottom: 20,
};
