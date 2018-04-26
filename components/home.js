import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = ({navigation}) => (
  <View>
  <Text style={styles.paragraph}>Welcome to OOTER!!! A simple carpool app that matches drivers and passengers/riders based on their origin and destination</Text>
        
  <Text style={styles.paragraph}>I'm Rider looking for a DRIVER for my trip</Text>
  <Button onPress={() => navigation.navigate('DriverSearch')} title="Driver Search" />

  <Text style={styles.paragraph}>I'm a driver looking for PASSENGER(S) for my trip</Text>
  <Button onPress{() => navigation.navigate('PassengerSearch')} title="Passenger Search" />
  </View>
)

export default Home

