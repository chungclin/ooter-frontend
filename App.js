import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to OOTER!!!</Text>
//         <Text>A simple carpool app that matches drivers and passengers/riders based on their origin and destination</Text>
//         <Text>Please sign in or Register for an account</Text>
//       </View>
//     );
//   }
// }

const User = t.struct({
  email: t.String,
  password: t.String,
});


export default class App extends React.Component {

  handleLoginSubmit = () => {
    // do the things  
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value)
  }

  handleRegisterSubmit = () => {
    // do the things  
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Welcome to OOTER!!!</Text>
         <Text style={styles.paragraph}>A simple carpool app that matches drivers and passengers/riders based on their origin and destination</Text>
        <Text style={styles.paragraph}>Please sign in or Register for an account</Text>
        <Form 
        type={User} 
        ref={c => this._form = c}
        options={options}
        />
        <Button
          title="Login"
          onPress={this.handleLoginSubmit}
        />
        <Button
          title="Register"
          onPress={this.handleRegisterSubmit}
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


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
