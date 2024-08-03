import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles2 } from '../styles/styles'

type Contenttype={
    fullname:string;
    message:string;
}
const AppHeader = ({fullname,message}:Contenttype) => {
  return (
    <View style={styles2.header}>
      <Text style={styles2.headerText}>
        Input your fullname: {fullname}
      </Text>
      <Text style={styles2.subtitleText}>
        {message}
      </Text>
    </View>
  )
}

export default AppHeader

    