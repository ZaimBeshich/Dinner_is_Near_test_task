import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { List } from '../components/List';
import { Ingredients } from '../components/Ingredients';
import { MOCK_RECIPES } from '../constants/mockStrings';

export const HomeScreen = () => {
  return (
    <Container>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.h1}>Твоя формула питания</Text>
        <Ingredients />
        <List />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  h1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
