import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyD4uRyakUGuBV9aL0dMsEBAQFBbuJAdupw",
      authDomain: "react-with-firebase-ececd.firebaseapp.com",
      databaseURL: "https://react-with-firebase-ececd.firebaseio.com",
      projectId: "react-with-firebase-ececd",
      storageBucket: "react-with-firebase-ececd.appspot.com",
      messagingSenderId: "358221974643"
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
