import { StatusBar } from 'expo-status-bar';
import React from "react"
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Alert 
} from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';

export default function App():React.JSX.Element { //:React.JSX.Element จำเป็นต้องใส่
  const onClickMe = ()=> {
    Alert.alert("Hi","hello React.js")
  }


  return (
    <View style={styles.container}>
      <AppHeader title="Input your fullname" />
      <Content title="Message from App.tsx"/>
      <AppFooter title="Thai-Nichi institute of Technology"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
