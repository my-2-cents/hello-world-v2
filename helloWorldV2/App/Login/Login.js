import React, { Component } from 'react';
import {
  Button,
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const Login = ({ onPress }) => {
  return(
    <View style={styles.container}>
      <Text>Sup</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name'
        />
        <TextInput
          style={styles.input}
          placeholder='password'
        />
        <Button
          title='button'
          onPress={onPress}
          style={styles.button}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'rebeccapurple',
    borderWidth: 1
  },
  button: {
    height: 20,
    width: 250,
    color: '#F7A213',
  }
})

module.exports = Login;
