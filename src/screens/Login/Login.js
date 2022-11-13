import { Text, View, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
        <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Login