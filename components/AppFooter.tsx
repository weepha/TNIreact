import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type Contenttype={
    title:string
   
}
const AppFooter = ({title}:Contenttype) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{title}</Text>
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
    footer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    },
    footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    },
    });
    