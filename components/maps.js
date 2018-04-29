import React from 'react';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';


const Maps = (props) => (
        <MapView 
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }}
        />
);

export default Maps;
