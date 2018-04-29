import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';


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
    list: {
      margin: 24,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#34495e',
    }
  });


export default function Results(props) {
  const data = props.navigation.state.params.data
  const { navigate } = props.navigation;
    return (
      <View>
      <Button onPress={() => navigate('Home')} title="Home" />

      <Text style={styles.paragraph}>Here are your results</Text>
      { !data.length ? <Text>Your search return no matches</Text>
        :
        <ScrollView>
      <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={styles.list}>
        Name: {item.name} {"\n"}
        Email: {item.email} {"\n"}
        Phone Number: {item.phoneNumber} {"\n"}
        Origin Address: {item.originAddress} {"\n"}
        Origin Radius: {item.originRadius} miles{"\n"}
        Destination Address: {item.destinationAddress} {"\n"}
        Destination Radius: {item.destinationRadius} miles {"\n"}
        </Text>
      )}
      />
      <Button onPress={() => navigate('GoogleMap')} title="Map" />
      </ScrollView>
    }
      </View>
    );
}
