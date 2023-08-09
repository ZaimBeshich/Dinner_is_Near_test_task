import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from './Icons/Icon';
import COLORS from '../constants/colors';

type FavProps = {
  isChecked: boolean;
  onPress: () => void;
};

export const Favorite = ({ isChecked, onPress }: FavProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={isChecked ? 'star_full' : 'star_empty'}
          style={[styles.icon, isChecked && styles.iconChecked]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 5,
    // right: 5,
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    color: COLORS.black,
  },
  iconChecked: {
    color: COLORS.gold,
  },
});
