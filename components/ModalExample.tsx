import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import React, { useState } from "react";

const ModalExample = (): React.JSX.Element => {
  const [modaVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modaVisible}
        onRequestClose={() => setModalVisible(!modaVisible)}
      >
        <View style={styles.modalView}>
          <Text>Hello React</Text>
          <Pressable onPress={() => setModalVisible(!modaVisible)}>
            <Text></Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});