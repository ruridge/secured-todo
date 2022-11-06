import * as React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DemoScreen from '../screens/demo-screen';

export type AppStackParamList = {
  Demo: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Demo" component={DemoScreen} />
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
