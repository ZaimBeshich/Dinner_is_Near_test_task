import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const Recipe = () => {
  return (
    <Container>
      <View style={styles.container}>
        <Text style={styles.h1}>Твоя формула питания</Text>
        <Button title='Рецепт' onPress={() => console.log('Рецепт')} />
        <Button title='Назад' onPress={() => console.log('Назад')} />
        <Button title='Домой' onPress={() => console.log('Домой')} />
      </View>
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
  },
});
