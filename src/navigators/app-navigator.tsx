import * as React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DemoScreen } from '../screens/demo-screen';
import { LoginScreen } from '../screens/login-screen';

import { authenticateAsync } from 'expo-local-authentication';

export type AppStackParamList = {
  Demo: undefined;
  Login: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  // TODO: use context to store auth state so it can be updated from the login screen
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(
    null,
  );

  React.useEffect(() => {
    authenticateAsync().then((result) => {
      setIsAuthenticated(result.success);
    });
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Demo" component={DemoScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <AppStack />
    </NavigationContainer>
  );
}
