import * as React from 'react';
import { SafeAreaView, Text, useColorScheme, View } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';
import { authenticateAsync } from 'expo-local-authentication';
import { Button } from '../components/button';
import { useAuth } from '../context/auth-context';

const Colors = {
  white: '#ffffff',
  black: '#000000',
};

export function LoginScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const { setIsAuth } = useAuth();

  function onPressAuthenticate() {
    authenticateAsync().then((result) => {
      setIsAuth(result.success);
      console.log(`set auth state to ${result.success}`);
    });
  }

  return (
    <SafeAreaView style={$wrapper}>
      <View style={$screenLayout}>
        <Text
          style={[
            $warningText,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}
        >
          Login using your device passcode or biometrics
        </Text>
        <Button onPress={onPressAuthenticate} text="Login" />
      </View>
    </SafeAreaView>
  );
}

const $wrapper: ViewStyle = {
  flex: 1,
};

const $screenLayout: ViewStyle = {
  marginTop: 80,
  marginHorizontal: 24,
};

const $warningText: TextStyle = {
  fontSize: 22,
  textAlign: 'center',
  marginBottom: 20,
};
