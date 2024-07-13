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

export default function App():React.JSX.Element { //:React.JSX.Element จำเป็นต้องใส่
  const onClickMe = ()=> {
    Alert.alert("Hi","hello React.js")
  }


  const users = [
    {id:1001,name:'John'},
    {id:1002,name:'Mary'},
  ]
  return (
    <View style={styles.container}>
      <AppHeader title="This is Header" year={2018}/>
      <AppHeader title="This is Header2"/>
      <Text>Hello React Native!</Text>
      { users.map(
        (Data,index)=>{
          return(
            <Text key={Data.id}>
              No.{index+1} ID: {Data.id} Name:{Data.name}
            </Text>
          )

        }
      )

      }

      <Button 
      title="Click Me"
      onPress={onClickMe}
      color='blue'
      // onPress={()=>{Alert.alert('Hi','React Native is Fun!!')}}
      />
      {/* <StatusBar style="auto" /> */}
      <AppFooter/>
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
