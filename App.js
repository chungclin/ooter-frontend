import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PassengerSearch, DriverSearch, Home } from '/components'
import t from 'tcomb-form-native';

const Form = t.form.Form;



// export default class App extends React.Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>Welcome to OOTER!!! A simple carpool app that matches drivers and passengers/riders based on their origin and destination</Text>
        
//         <Text style={styles.paragraph}>I'm Rider looking for a DRIVER for my trip</Text>
//         <Button
//         onPress={() => navigation.navigate('DriverSearch')}
//         title="Driver Search"
//         />
      
//         <Text style={styles.paragraph}>I'm a driver looking for PASSENGER(S) for my trip</Text>
//         <Button
//         onPress{() => navigation.navigate('PassengerSearch')}
//         title="Passenger Search"
//         />
//       </View>
//     );
//   }
// }

const RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      }
  },
  MyLists: {
    screen: PassengerSearch,
    navigationOptions: {
      headerTitle: 'I am a driver and I need some riders!!'
    }
  },
  Books: {
    screen: DriverSearch,
    navigationOptions: {
      headerTitle: 'I am a passenger and I need someone to drive me!!'
    }
  }
});

export default RootNavigator;

