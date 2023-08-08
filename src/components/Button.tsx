import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import COLORS from '../constants/colors';

type ButtonProps = {
  title: string;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
};

export const Button = (props: ButtonProps) => {
  const { title, disabled, onPress, isLoading, buttonStyle } = props;

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
    backgroundColor: COLORS.black,
  },
  buttonTitle: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
