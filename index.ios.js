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
  View,
  ScrollView
} from 'react-native';

import Communications from 'react-native-communications';

import Button from 'apsl-react-native-button'

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
        //contacts = contacts.slice(3,10)
        this.setState({contacts: contacts});
      });

  }

  // callNumber(){
  //   Communications.phonecall('2152006084', true)};
  // }

  render() {
 
      counter++;
      if(counter==2){
        console.log("state.contacts[0]", this.state.contacts[0].phoneNumbers[0].number);

      }

      const contactsView = this.state.contacts.map(function(contact, index){
        return       <Button
        style={{backgroundColor: 'pink', height: 70, margin: 40}} textStyle={{fontSize: 60}}
        //JON: above is what you would play with for the button styling   
        onPress={() => Communications.phonecall(contact.phoneNumbers[0].number, false)}
        key={index}>
        {contact.givenName}
      </Button>
      })
 
    return (
      <ScrollView>
        {this.state.contacts.length ? contactsView : null}
      </ScrollView>
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


 