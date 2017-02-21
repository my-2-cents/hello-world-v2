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
  )
}

const styles = StyleSheet.create({
  nav: {
    flex: 1
  },
  container: {
    height: 600,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rebeccapurple',
    borderWidth: 1
  },
  button: {
    height: 40,
    width: 100,
    color: '#F7A213',
  }
})

module.exports = Login;
