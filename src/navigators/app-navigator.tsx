import React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login-screen';
import { useAuth } from '../context/auth-context';
import { TodoScreen } from '../screens/todo-screen';

// react-navigation screens
// replace undefined to type default props passed into screens (if used)
export type AppStackParamList = {
  Todo: undefined;
  Login: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  const { isAuth } = useAuth();

  // On App Start:
  // - isAuth is null and we know we need to authenticate
  // - so authentication is handled in the AuthProvider
  // - we render nothing until we know if the authentication was successful
  if (isAuth === null) {
    return null;
  }

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen
            name="Todo"
            component={TodoScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, animation: 'none' }}
        />
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
