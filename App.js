/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/HomeScreen';
import { Recipe } from './src/screens/Recipe';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Recipe' component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
