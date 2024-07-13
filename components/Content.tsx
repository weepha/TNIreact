import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
type Contenttype={
    title:string
  
}
const Content = ({title}:Contenttype) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <Button title="CLICK ME"/>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },
    });
    