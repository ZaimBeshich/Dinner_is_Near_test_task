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

export const Container = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.transparent}
        barStyle={'dark-content'}
      />
      <View style={styles.fakeHeader} />
      {props.children}
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
});
