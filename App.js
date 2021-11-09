import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { Feed } from './src/screens/feed';
import { Favorites } from './src/screens/favorites';
import { Finder } from './src/screens/finder';

const { Navigator, Screen } = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Finder" component={Finder} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}