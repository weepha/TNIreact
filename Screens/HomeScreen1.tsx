import { StyleSheet, View, Text, Button, Alert } from "react-native";
import React, {useLayoutEffect} from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,

} from "react-navigation-header-buttons";
const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
  );

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  useLayoutEffect(()=>{
    navigation.setOptions({
        title:'หน้าหลัก',
        heaterTitle:()=><AppLogo/>,
        headerTitleAlign:'center'
        
        
    })
  },[navigation])
  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institiute of Technology",
      companyId: 100,
    });
  };
  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color="pink" />
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​

    fontWeight: "bold",
  },
});
