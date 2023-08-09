import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from './Icons/Icon';
import COLORS from '../constants/colors';
import { FavProps } from '../constants/types';

export const Favorite = ({ isChecked, onPress }: FavProps) => {
  const favoriteTitle: string = isChecked
    ? 'В избранном'
    : 'Добавить в избранное';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={isChecked ? 'star_full' : 'star_empty'}
          style={[styles.icon, isChecked && styles.iconChecked]}
        />
      </TouchableOpacity>
      <Text style={styles.favTitle}>{favoriteTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  icon: {
    fontSize: 24,
    color: COLORS.black,
    marginRight: 10,
  },
  iconChecked: {
    color: COLORS.gold,
  },
  favTitle: {
    fontSize: 17,
    color: COLORS.black,
  },
});
