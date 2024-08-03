import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from "react"
import { View,StyleSheet,TextInput, Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';
import { styles2 } from './styles/styles';


 export default function App():React.JSX.Element { //:React.JSX.Element จำเป็นต้องใส่
  const [fullname,setFullname]=useState('');
  const [message,setmessage]=useState('Message from App.tsx')
  const [footermessage,setfootermessage]=useState('Thai-Nichi Institute of Technology');

  useEffect(()=>{
    console.log("Component has mounted");
  },[])

  useEffect(()=>{
    console.log(`Fullname has changed to : ${fullname}`);
  },[fullname])// This will run whenever 'fullname' changes

  const handleButtomClick = () =>{
    Alert.alert("Hollo ", `Input your fullname : ${fullname}`);
  }

  return (
    <View style={styles2.container}>
      <AppHeader fullname={fullname} message={message}  />
      {/* <Content message={message} fullname={fullname}/> */}
      <Content message="message" onButtonClick = {handleButtomClick}/>
      <AppFooter footermessage={footermessage}/>
      <TextInput
      style={styles2.input}
      placeholder="Enter your fullname"
      value={fullname}
      onChangeText={setFullname}
      />
    </View>
  );
}








