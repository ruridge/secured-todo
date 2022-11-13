import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import type { ViewStyle } from 'react-native';
import { Text } from './text';
import { RADIUS, COLORS, SPACING } from '../../theme';

const buttonSizes = {
  small: 'sm',
  medium: 'lg',
  large: '2xl',
} as const;

type ButtonProps = {
  text: string;
  onPress: () => void;
  size?: keyof typeof buttonSizes;
};
export function Button({ text, onPress, size = 'medium' }: ButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  return (
    <Pressable
      onPress={onPress}
      style={(state) => [
        baseButtonStyle,
        colorScheme === 'light' && lightButtonStyle,
        colorScheme === 'dark' && darkButtonStyle,
        state.pressed && { opacity: 0.8 },
      ]}
    >
      <Text
        size={buttonSizes[size]}
        style={{ color: COLORS.white, textAlign: 'center' }}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const baseButtonStyle: ViewStyle = {
  borderRadius: RADIUS.DEFAULT,
  paddingVertical: SPACING[2],
  paddingHorizontal: SPACING[4],
};

const lightButtonStyle: ViewStyle = {
  backgroundColor: COLORS.blue[800],
};

const darkButtonStyle: ViewStyle = {
  backgroundColor: COLORS.blue[900],
};
