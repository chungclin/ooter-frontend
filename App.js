import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PassengerSearch, DriverSearch, Home } from './components';


const RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home'
      }
  },
  PassengerSearch: {
    screen: PassengerSearch,
    navigationOptions: {
      headerTitle: 'I am a driver and I need some riders!!'
    }
  },
  DriverSearch: {
    screen: DriverSearch,
    navigationOptions: {
      headerTitle: 'I am a passenger and I need someone to drive me!!'
    }
  }
});

export default RootNavigator;

