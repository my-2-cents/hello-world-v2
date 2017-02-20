import React, { Component } from 'react';
import {
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
        <TextInput
          style={styles.input}
          onChangeText={this.props.updateName}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rebeccapurple',
    borderWidth: 1
  }
})
