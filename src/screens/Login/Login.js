import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import {auth} from '../../firebase/config'


class Login extends Component {

  constructor(){
    super()
    this.state={
      mail:'',
      password:'',
      logueado: false
    }
  }

  loguear (mail, password){
    auth.signInWithEmailAndPassword(mail, password)
    .then( res => this.setState( {logueado: true}))
    .catch(err => console.log(err))
  }
  render(){
    return (
      <View>
        <Text>Login</Text>
        <View>
          <TextInput
          style={Style.input}
          onChangeText={text => this.setState({mail:text})}
          placeholder='Ingresa tu email'
          value={this.state.mail}
          />
          <TextInput
          style={Style.input}
          onChangeText={text => this.setState({password:text})}
          placeholder='Ingresa tu contraseña'
          value={this.state.password}
          />
        </View>        
      </View>  
    )
  }
}
export default Login