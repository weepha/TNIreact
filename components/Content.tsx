import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { styles2 } from "../styles/styles";
type Contenttype = {
  message: string;
  //fullname: string;
  onButtonClick:() =>void;
};
const Content = ({ message, onButtonClick }: Contenttype): React.JSX.Element => {
  /* const[displayFullname,setDisplayFullname]= React.useState('');

  const handleButtomClick =()=>{
    setDisplayFullname(fullname)
    Alert.alert("Hollo ", `Input your fullname : ${fullname}`);
  }; */

  return (
    <View style={styles2.content}>
      <Text style={styles2.text}>{message}</Text>
      {/* <Text style={styles2.text}>{displayFullname}</Text> */}
      <Button title="CLICK ME"  onPress={onButtonClick} color="blue"/>
    </View>
  );
};

export default Content;
