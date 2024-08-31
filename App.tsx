import { StyleSheet, Text} from 'react-native'
import React from 'react'

import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreatePostScreen from './Screens/CreatePostScreen'
const App = (): React.JSX.Element  => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='About' component={AboutScreen}/>
        <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/>
      </HomeStack.Navigator>

    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})