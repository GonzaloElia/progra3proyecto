import { View, Text } from 'react-native'
import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'

const Stack = createNativeStackNavigator()

class MainNav extends Component {
    constructor(props) {
        super (props)
    }

    render(){
        return (
    <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name= "Login" component= { Login } 
            options={{headerShown:false}}/>
            
            <Stack.Screen name= "Register" component= { Register }/>
        </Stack.Navigator>
    </NavigationContainer>
  )
 }
}
export default MainNav