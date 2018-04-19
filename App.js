import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: false }

  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyD4uRyakUGuBV9aL0dMsEBAQFBbuJAdupw",
      authDomain: "react-with-firebase-ececd.firebaseapp.com",
      databaseURL: "https://react-with-firebase-ececd.firebaseio.com",
      projectId: "react-with-firebase-ececd",
      storageBucket: "react-with-firebase-ececd.appspot.com",
      messagingSenderId: "358221974643"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      }else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  render() {
    return (
      <View>
        <Header name='Firebase' />
        <LoginForm/>
      </View>
    );
  }
}
