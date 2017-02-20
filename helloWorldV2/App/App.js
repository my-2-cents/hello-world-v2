import React, { Component } from 'react';
import {
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Login from './Login/Login.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: '',
    }
  }

  updateName(text) {
    this.setState({
      name: text
    }, () => {
      console.log(this.state)
    });
  }

  render() {
    return(
      <Login
        updateName={this.updateName.bind(this)}
      />
    )
  }
}


