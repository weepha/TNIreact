import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = () : React.JSX.Element => {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const validateEmail = (email:string):boolean=>{ //(email:string) --> ใส่ค่าตัวแปร 
    const recheckEmail = /\S+@\S+\.\S+/;
    return  recheckEmail.test(email) // ตรวจสอบรูปแบบ email

  }

  const handleSummit = ()=>{
    let errorMessage="";
    if(!name){
      // Alert.alert("Alert","Please Enter Name",[{text:"OK"}]);
      // return;//break;
      errorMessage+="Please Enter Name\n";
    }
    if(!email){
      // Alert.alert("Alert","Please Enter Email",[{text:"OK"}]);
      // return;//break;
      errorMessage+="Please Enter Email\n";
    }else if(!validateEmail(email)){
      errorMessage += "Invalid Email Format\n"
    }
    //ตรวจสอบการป้อนรหัสผ่าน
    if(!password){
      // Alert.alert("Alert","Please Enter Email",[{text:"OK"}]);
      // return;//break;
      errorMessage+="Please Enter Password\n";
    }else if (password.length<6){ //.length--> ตรวจสอบความกว้าง (จำนวนตัวอักษร)
      errorMessage +="Password must be at lease 6 characters\n";
    }
    if(errorMessage){
      Alert.alert("Error",errorMessage.trim(),[{text:"OK"}]);//trim()--> การตัดช่องว่าง
      return;//break;
    }
    Alert.alert("Alert","Success",[{text:"OK"}]);
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Enter Name"
      value={name}
      onChangeText={setName}
       />
      <TextInput
      style={styles.input}
       placeholder="Enter Email"
       keyboardType="email-address"
       value={email}
       onChangeText={setEmail}
      />
      <TextInput
      style={styles.input}
       placeholder="Enter Password"
       value={password}
       onChangeText={setPassword}
      />
      <Button title='submit' onPress={handleSummit}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
        marginTop: 50,
        backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
        borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
        elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
        width: '100%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
        },
        input: {
        height: 45, // เพิ่มความสูงของ TextInput
        borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
        borderWidth: 1,
        borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
        marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
        paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
        backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
        }, 
})