import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { PassengerSearch, DriverSearch, Home } from './components'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Driver = t.struct({
    email: t.String,
    phoneNumber: t.String,
    origin: t.String,
    originRadius: t.Number,
    destination: t.String,
    destinationRadius: t.Number
  });
  

export default class App extends React.Component {
    constructor(props){
        super(props)
    
      }
    
    handleSubmit() {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value)
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Find some riders for my car</Text>
        
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

// const styles = StyleSheet.create({
//     container: {
//       justifyContent: 'center',
//       marginTop: 50,
//       padding: 20,
//       backgroundColor: '#ffffff',
//     },
//     paragraph: {
//       margin: 24,
//       fontSize: 18,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       color: '#34495e',
//     },
//   });