import React from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { authenticateAsync } from 'expo-local-authentication';
import { useAuth } from '../context/auth-context';
import { Button, Text } from '../components/atoms';
import { COLORS, SPACING } from '../theme';

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={$screenLayout}>
        <Text
          size="2xl"
          style={{
            color: isDarkMode ? COLORS.white : COLORS.black,
            marginBottom: SPACING[5],
            textAlign: 'center',
          }}
        >
          Login using your device passcode or biometrics
        </Text>
        <Button onPress={onPressAuthenticate} text="Login" size="large" />
      </View>
    </SafeAreaView>
  );
}

const $screenLayout: ViewStyle = {
  marginTop: SPACING[20],
  marginHorizontal: SPACING[6],
};
