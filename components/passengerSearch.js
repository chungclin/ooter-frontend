import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DriverSearch, Home, GooglePlacesInputDestinationAsADriver, GooglePlacesInputOriginAsADriver } from './'
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
    }
    // destinationRadius: {
    //   error: 'Please input a destination',
    // },
    // originRadius: {
    //     error: 'Please input a origin'
    // }
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
    name: t.String,
    email: t.String,
    phoneNumber: t.String,
    originRadius: OriginRadius, //t.Number
    destinationRadius: DestinationRadius
  });
  

//this.props.textinput??


//passengersearchposts to passenger
export default class PassengerSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            originLAT: '',
            originLONG: '',
            originAddress: '',
            originRadius: '',
            destinationLAT: '',
            destinationLONG: '',
            destinationAddress: '',
            destinationRadius: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    
    setOriginAddress = (originLAT, originLONG, originAddress) => {
        this._origin = { originLAT, originLONG, originAddress }
    }
    
    setDestinationAddress = (destinationLAT, destinationLONG, destinationAddress) => {
        this._destination = { destinationLAT, destinationLONG, destinationAddress }
        console.log(this.setDestinationAddress, 'destination');
    }
    
    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value)
        const payload = Object.assign({}, value, this._origin, this._destination);
        console.log(this._origin, 'invoked')
        console.log(payload, 'lalalal');
        axios.post('http://localhost:8080/api/driver/origin-coordinates', payload)
            .then(res => res.data)
            .catch(err => console.error(err));
        }

  render() {
    return (
      <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      
      <ScrollView>
        <Text style={styles.paragraph}>Find some riders for my car</Text>
        <Text style={styles.paragraph}>What is your ORIGIN ADDRESS?</Text>
        <GooglePlacesInputOriginAsADriver setAddress={this.setOriginAddress} />
        <Text style={styles.paragraph}>What is your DESTINATION ADDRESS?</Text>
        <GooglePlacesInputDestinationAsADriver setAddress={this.setDestinationAddress} /> 
        <Text style={styles.paragraph}>I'm Rider looking for a DRIVER for my trip</Text>
        <Form 
        type={Driver} 
        ref={c => this._form = c}
        options={options}
        />
        <Button
          title="Submit"
          onPress={this.handleSubmit}
        />
    </ScrollView>
      </View>
    );
  }
}



// export default class App extends React.Component {
//   constructor(props){
//     super(props)

//   }

//   handleLoginSubmit = () => {
//     // do the things  
//     const value = this._form.getValue(); // use that ref to get the form value
//     console.log('value: ', value)
//   }

//   handleRegisterSubmit = () => {
//     // do the things  
//     const value = this._form.getValue(); // use that ref to get the form value
//     console.log('value: ', value)
//   }

//   render() {
//     const { handleLoginSubmit } = props;

//     return (
//       <View style={styles.container}>
//       <GooglePlacesAutoComplete /> 

//         <Text style={styles.paragraph}>Welcome to OOTER!!!</Text>
//          <Text style={styles.paragraph}>A simple carpool app that matches drivers and passengers/riders based on their origin and destination</Text>
//         <Text style={styles.paragraph}>Please sign in or Register for an account</Text>
//         <Form 
//         type={User} 
//         ref={c => this._form = c}
//         options={options}
//         />
//         <Button
//           title="Login"
//           onPress={this.handleLoginSubmit}
//         />
//         <Button
//           title="Register"
//           onPress={this.handleRegisterSubmit}
//         />
//       </View>
//     );
//   }
// }

// const options = {
//   fields: {
//     email: {
//       error: 'Please input an email'
//     },
//     password: {
//       error: 'Please enter a password'
//     }
//   },
// };

