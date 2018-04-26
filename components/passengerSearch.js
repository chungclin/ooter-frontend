import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PassengerSearch, DriverSearch, Home } from '/components'
import t from 'tcomb-form-native';

const Form = t.form.Form;


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Find some riders for my car</Text>
        
        <Text style={styles.paragraph}>I'm Rider looking for a DRIVER for my trip</Text>
        <Button
        onPress={() => navigation.navigate('DriverSearch')}
        title="Driver Search"
        />
      
        <Text style={styles.paragraph}>I'm a driver looking for PASSENGER(S) for my trip</Text>
        <Button
        onPress{() => navigation.navigate('PassengerSearch')}
        title="Passenger Search"
        />
      </View>
    );
  }
}

const options = {
  fields: {
    email: {
      error: 'Please input an email'
    },
    password: {
      error: 'Please enter a password'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};


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
    },
  });