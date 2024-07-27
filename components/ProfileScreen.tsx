import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const ProfileImage = require("../assets/รูปถ่าย.jpg");
  const ProfileImage1 = require("../assets/รูปถ่าย3.jpg");
  const [name, setName] = useState("Weerawat Phapukdee");
  const [image, setImage] = useState(ProfileImage);

  const handChangeName =() => {
    setName(name == "Weerawat Phapukdee" ? "No Name" : "Weerawat Phapukdee");
  }
  const handChangeImage =()=> {
    setImage(ProfileImage1)
  }
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="change name" onPress={handChangeName} />
          <Text>{"\n"}</Text>
          <Button title="change image" onPress={handChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
