import React from 'react';
import type { RefObject } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';
import { Button } from './atoms';
import { COLORS, RADIUS, SPACING } from '../theme';
import { sizeStyles } from './atoms/text';

type ButtonInputProps = {
  onSubmit: () => void;
  onChangeText: (text: string) => void;
  value: string;
  disabled?: boolean;
  textInputRef?: RefObject<TextInput>;
  buttonText: string;
};
export function ButtonInput({
  onSubmit,
  onChangeText,
  value,
  disabled,
  textInputRef,
  buttonText,
}: ButtonInputProps) {
  return (
    <View style={buttonInputStyles}>
      <TextInput
        style={[textInputStyles, sizeStyles.base]}
        placeholder="Enter here"
        onChangeText={onChangeText}
        value={value}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        ref={textInputRef}
      />
      <Button text={buttonText} onPress={onSubmit} disabled={disabled} />
    </View>
  );
}

const buttonInputStyles: ViewStyle = {
  backgroundColor: COLORS.white,
  borderRadius: RADIUS['2xl'],
  flexDirection: 'row',
  padding: SPACING[4],
  marginVertical: SPACING['0.5'],
  marginHorizontal: SPACING[4],
};

const textInputStyles: TextStyle = {
  borderColor: COLORS.gray['300'],
  borderBottomWidth: StyleSheet.hairlineWidth,
  marginRight: SPACING[4],
  paddingBottom: SPACING[4],
  flexBasis: '100%',
  flexShrink: 1,
};
