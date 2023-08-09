import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import COLORS from '../constants/colors';
import { ButtonProps } from '../constants/types';

export const Button = ({
  title,
  disabled,
  onPress,
  buttonStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle, disabled && styles.buttonDisabled]}
      disabled={disabled}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.green,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 17,
  },
  buttonDisabled: {
    backgroundColor: COLORS.grey_light,
  },
  buttonTitle: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
