import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PassengerSearch, DriverSearch, Home, Results, GoogleMap } from './components';


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
      headerTitle: 'I am a driver and I need passengers!!'
    }
  },
  DriverSearch: {
    screen: DriverSearch,
    navigationOptions: {
      headerTitle: 'I am a passenger and I need drivers!!'
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      headerTitle: 'Here are your results'
    }
  },
  GoogleMap: {
    screen: GoogleMap,
    navigationOptions: {
      headerTitle: 'Map View of your results'
    }
  }
}
);

export default RootNavigator;
