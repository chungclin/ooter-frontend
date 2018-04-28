import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DriverSearch, Home, GooglePlacesInputDestinationAsADriver, GooglePlacesInputOriginAsADriver } from './';
import t from 'tcomb-form-native';

const options = {
  fields: {
    name: {
      error: 'Please enter a name'
    },
    email: {
      error: 'Please input an email'
    },
    phoneNumber: {
      error: 'Please enter a phone number'
    },
    destinationRadius: {
      error: 'Please input a destination',
    },
    originRadius: {
        error: 'Please input a origin'
    }
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
    }
  });

const Form = t.form.Form;
const OriginRadius = t.enums({
    1: '1 miles',
    2: '2 miles',
    5: '5 miles',
    10: '10 miles',
    25: '25 miles'
});

const DestinationRadius = t.enums({
    1: '1 miles',
    2: '2 miles',
    5: '5 miles',
    10: '10 miles',
    25: '25 miles'
});

const Driver = t.struct({
    originRadius: OriginRadius,
    name: t.String,
    email: t.String,
    phoneNumber: t.String,
    destinationRadius: DestinationRadius
  });
  
export default class PassengerSearch extends React.Component {
  static navigationOptions = {
    title: 'Search for a Passenger'
  }

  constructor() {
    super();
    this.state = {
        data: []
    
    };
  }
    
    setOriginAddress = (originLAT, originLONG, originAddress) => {
        this._origin = { originLAT, originLONG, originAddress };
    }
    
    setDestinationAddress = (destinationLAT, destinationLONG, destinationAddress) => {
        this._destination = { destinationLAT, destinationLONG, destinationAddress };
    }
    
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        const payload = Object.assign({}, value, this._origin, this._destination);
        axios.post('http://localhost:8080/api/passenger', payload)
            .then(res => res.data)
            .then(data => {
                this.setState({ data });
            })
            .then(() => this.props.navigation.navigate('Results', this.state))
            .catch(err => console.error(err));
          }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button onPress={() => navigate('Home')} title="Home" />
      
      <ScrollView>
        <Text style={styles.paragraph}>I'm a DRIVER looking for RIDERS</Text>
        <Text style={styles.paragraph}>What is your ORIGIN ADDRESS?</Text>
        <GooglePlacesInputOriginAsADriver setAddress={this.setOriginAddress} />
        <Form 
        type={Driver} 
        ref={c => this._form = c}
        options={options}
        />
        <Text style={styles.paragraph}>What is your DESTINATION ADDRESS?</Text>
        <GooglePlacesInputDestinationAsADriver setAddress={this.setDestinationAddress} /> 
        <Button
          title="Submit"
          onPress={this.handleSubmit}
        />
    </ScrollView>
      </View>
    );
  }
}

