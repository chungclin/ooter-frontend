import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { PassengerSearch, DriverSearch, Home } from './components'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Passenger = t.struct({
    email: t.String,
    phoneNumber: t.String,
    origin: t.String,
    originRadius: t.Number,
    destination: t.String,
    destinationRadius: t.Number
  });
  

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
      };
    
    handleSubmit() {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value)
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Find some riders for my car</Text>
        
        <Text style={styles.paragraph}>I'm RIDER looking for a DRIVER</Text>
        <Form 
        type={Passenger} 
        ref={c => this._form = c}
        options={options}
        />
        <Button
          title="Submit"
          onPress={this.handleSubmit}
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
    phoneNumber: {
      error: 'Please enter a phone number'
    },
    destination: {
      error: 'Please input a destination',
    },
    origin: {
        error: 'Please input a origin'
    }
  }
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
