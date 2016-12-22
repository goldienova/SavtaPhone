/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import Communications from 'react-native-communications';

var Contacts = require('react-native-contacts');

var counter = 0;

export default class SavtaPhone extends Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount(){
      Contacts.getAll((err, contacts) => {
        // contacts.filter(function(contact){
        //   if contact.phoneNumbers 
        // })
        // console.log("filtered contacts", contacts);
        contacts = contacts.slice(3,10)
        this.setState({contacts: contacts});
      });

  }

  // callNumber(){
  //   Communications.phonecall('2152006084', true)};
  // }

  render() {
 
      counter++;
      if(counter==2){
        console.log("state.contacts[0]", this.state.contacts[0]);

      }

      const contactsView = this.state.contacts.map(function(contact, index){
        return <Button key={index} title={contact.givenName} onPress={() => Communications.phonecall('4692619137', false)}/>;
      })
 
    return (
      <View style={styles.container}>
        {this.state.contacts.length ? contactsView : null}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SavtaPhone', () => SavtaPhone);
