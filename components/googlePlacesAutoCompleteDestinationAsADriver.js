import React from 'react';
import axios from 'axios';

import { View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const GooglePlacesInputOriginAsAPassenger = ({ setAddress }) => (
    <GooglePlacesAutocomplete
    textInputProps={{
      onChangeText: (text) => { console.log(text) },
  }}
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={(row) => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data);
        console.log(details, 'spost to backend with axios call with details.geometry.location.long or lat')
        setAddress(details.geometry.location.lat, details.geometry.location.lng, data.description)
        
      }}
      getDefaultValue={() => {
        return ''; // text input default value
      }}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBqZgfQn2QfscSE1eMSopIJ5bvRv7n3hHo',
        language: 'en', // language of the results
        types: 'address' // default: 'geocode'
      }}
      styles={{
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
 
    //   currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
    //   currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities 
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    />
    );

export default GooglePlacesInputOriginAsAPassenger;
