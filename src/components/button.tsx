import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

export function Button({ text, onPress }: ButtonProps) {
  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          buttonStyle,
        ]}
      >
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
}

const containerStyle: ViewStyle = {
  alignItems: 'center',
};

const buttonStyle: ViewStyle = {
  borderRadius: 8,
  paddingVertical: 6,
  paddingHorizontal: 12,
};

const textStyle: TextStyle = {
  fontSize: 16,
};
