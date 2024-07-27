import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const ProfileImage = require("../assets/รูปถ่าย3.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>Weerawat Phapukdee</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

