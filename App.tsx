import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import Login from './components/Login'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
const App = () => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/> */}
      <NewsApp/>
    </View>
  )
}

export default App