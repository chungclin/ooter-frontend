import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
  <Text style={styles.paragraph}>
  <Image style={{ width: 100, height: 100 }} source={{uri: 'https://i.pinimg.com/originals/03/6f/70/036f70cede88f3d8dd96d5cfa92c6ccf.jpg'}} />
  Welcome to OOTER!!! {"\n"} A simple carpool app that matches drivers and passengers/riders based on similar origin and destination
  </Text>
        
  <Text style={styles.paragraph}>I'm RIDER looking for a DRIVER for my trip</Text>
  <Button onPress={() => navigation.navigate('DriverSearch')} title="Search for Drivers" />

  <Text style={styles.paragraph}>I'm a DRIVER looking for RIDERS for my trip</Text>
  <Button onPress={() => navigation.navigate('PassengerSearch')} title="Search for Riders" />

  </View>
)

export default Home;

