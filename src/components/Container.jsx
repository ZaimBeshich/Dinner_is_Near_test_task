import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  NativeModules,
} from 'react-native';

import COLORS from '../constants/colors';
import { Button } from './Button';
import { useNavigation } from '@react-navigation/native';

export const Container = (props) => {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      console.log('go back');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      {props.children}
      <View style={styles.navContainer}>
        <Button title='Назад' onPress={goBack} />
        <Button title='Домой' onPress={() => console.log('Домой')} />
      </View>
    </SafeAreaView>
  );
};

const { StatusBarManager } = NativeModules;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 25,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT,
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
    borderTopColor: COLORS.grey_light,
    borderTopWidth: 1,
  },
});
