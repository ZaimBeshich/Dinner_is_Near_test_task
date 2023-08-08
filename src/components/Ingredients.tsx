import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import COLORS from '../constants/colors';
import { MOCK_INGREDIENTS } from '../constants/mockStrings';

export const Ingredients = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ing}>{MOCK_INGREDIENTS.join('\n+\n')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: COLORS.grey_light,
    marginBottom: 25,
  },
  ing: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
