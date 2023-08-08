import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import COLORS from '../constants/colors';
import { Button } from './Button';

export const Container = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.transparent}
        barStyle={'dark-content'}
      />
      <View style={styles.fakeHeader} />
      {props.children}
      <View style={styles.navContainer}>
        <Button title='Назад' onPress={() => console.log('Назад')} />
        <Button title='Домой' onPress={() => console.log('Домой')} />
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 25,
  },
  fakeHeader: {
    width: width,
    height: 20,
    marginVertical: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
