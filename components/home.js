import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Icon } from 'react-native-elements'

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
    color: '#000000',
  }
});

const Home = ({ navigation }) => (
  <View>
  <Image 
  style={{ width: 130, height: 180, marginLeft: "auto", marginRight: "auto" }} 
  source={{uri: 'https://i.pinimg.com/originals/03/6f/70/036f70cede88f3d8dd96d5cfa92c6ccf.jpg'}} 
  />
  <Text style={styles.paragraph}>
  <Text style={{ fontWeight: 'bold', fontSize: 24 }}> OOTER! </Text> {"\n"} A carpool app that matches drivers and passengers/riders based on similar origin and destination
  </Text>
        
  <Text style={styles.paragraph}>I'm RIDER looking for a DRIVER for my trip</Text>
  <Button onPress={() => navigation.navigate('DriverSearch')} title="Search for Drivers" />

  <Text style={styles.paragraph}>I'm a DRIVER looking for RIDERS for my trip</Text>
  <Button 
  onPress={() => navigation.navigate('PassengerSearch')}
    title="Search for Riders"

  />

  </View>
)

export default Home;

