import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PassengerSearch, DriverSearch, Home, Results } from './components';


const RootNavigator = StackNavigator(
  {
  Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home'
      }
  },
  PassengerSearch: {
    screen: PassengerSearch,
    navigationOptions: {
      headerTitle: 'I am a driver and I need riders!!'
    }
  },
  DriverSearch: {
    screen: DriverSearch,
    navigationOptions: {
      headerTitle: 'I am a rider and I need drivers!!'
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      headerTitle: 'Here are your results'
    }
  }
}
);

export default RootNavigator;
