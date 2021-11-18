import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { Feed } from './src/screens/feed';
import { Favorites } from './src/screens/favorites';
import { Search } from './src/screens/search';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createStackNavigator();
// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}