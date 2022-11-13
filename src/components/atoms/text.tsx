import React from 'react';
import { Text as RNText } from 'react-native';
import type { TextProps as RNTextProps, TextStyle } from 'react-native';

type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export interface TextProps extends RNTextProps {
  size?: TextSize;
}

export function Text({
  size = 'base',
  style: styleOverrides,
  ...rest
}: TextProps) {
  return <RNText style={[sizeStyles[size], styleOverrides]} {...rest} />;
}
export const sizeStyles: Record<TextSize, TextStyle> = {
  xs: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  base: { fontSize: 16, lineHeight: 24 },
  lg: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 28 },
  '2xl': { fontSize: 24, lineHeight: 32 },
  '3xl': { fontSize: 30, lineHeight: 36 },
  '4xl': { fontSize: 36, lineHeight: 40 },
  '5xl': { fontSize: 48, lineHeight: 48 },
  '6xl': { fontSize: 60, lineHeight: 60 },
  '7xl': { fontSize: 72, lineHeight: 72 },
  '8xl': { fontSize: 96, lineHeight: 96 },
  '9xl': { fontSize: 128, lineHeight: 128 },
};
