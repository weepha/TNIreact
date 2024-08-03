import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles2 } from '../styles/styles'
type AppfooterProps={
    footermessage:string
   
}
const AppFooter = ({ footermessage}: AppfooterProps) => {
  return (
    <View style={styles2.footer}>
      <Text style={styles2.footerText}>{ footermessage}</Text>
    </View>
  )
}

export default AppFooter


    