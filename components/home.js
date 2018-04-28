import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { PassengerSearch, DriverSearch, Home } from './components'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});

const Home = ({navigation}) => (
  <View>
  <Button onPress={() => navigation.navigate('Ooter Home')} title="Home" />
  <Text style={styles.paragraph}>Welcome to OOTER!!! {"\n"} A simple carpool app that matches drivers and passengers/riders based on similar origin and destination</Text>
        
  <Text style={styles.paragraph}>I'm RIDER looking for a DRIVER for my trip</Text>
  <Button onPress={() => navigation.navigate('DriverSearch')} title="Driver Search" />

  <Text style={styles.paragraph}>I'm a DRIVER looking for RIDERS for my trip</Text>
  <Button onPress={() => navigation.navigate('PassengerSearch')} title="Rider Search" />

  </View>
)

export default Home;

