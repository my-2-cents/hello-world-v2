import React, { Component } from 'react';
import {
  Button,
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Sup</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={this.props.updateName}
            placeholder='Name'
          />
          <TextInput
            style={styles.input}
            onChangeText={this.props.updateName}
            placeholder='password'
          />
          <Button
            title='button'
            onPress={this.props.nextScene}
            style={styles.button}
          />
        </View>
      </View>
    )
  }
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
