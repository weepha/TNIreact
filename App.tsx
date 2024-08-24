import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import Login from './components/Login'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import AxiosgetData from './components/AxiosgetData'
import AxiospostData from './components/AxiospostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
const App = () => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      {/* <FlastListExample/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiospostData/> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
    </View>
  )
}

export default App