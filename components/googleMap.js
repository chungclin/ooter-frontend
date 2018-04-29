import React from 'react';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Maps } from './';


export default class GoogleMap extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
            <Maps />
            <Button onPress={() => navigate('Home')} title="Home" />
            </View>
        );

    }
}
