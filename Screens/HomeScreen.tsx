import { Button, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { Text } from "@rneui/base"; //ใช้ component base
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState, setLogin } from "../auth/auth-slice";
import { logout } from "../services/auth-service";

import AppLogo from "../components/AppLogo";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(selectAuthState);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            onPress={async () => {
              await logout();
              dispatch(setLogin(false));
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
    });
  };
  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color="pink" />
      {profile?(
        <>
          <Text h3>welcome {profile.name}</Text>
          <Text>
            Email:{profile.email} ID : {profile.id} Role:{profile.role}
          </Text>
        </>
      ):null}
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
});
