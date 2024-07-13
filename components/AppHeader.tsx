import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Contenttype={
    title:string
    year:number
}
const AppHeader = ({title,year}:Contenttype) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
    backgroundColor: '#AEC6CF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },
    subtitleText: {
    fontSize: 16,
    color: '#fff',
    },
    });
    