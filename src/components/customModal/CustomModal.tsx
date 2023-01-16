import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

const CustomModal = ({ visible, label, buttonLeftLabel, buttonRightLabel }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      // onRequestClose={() => {
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={styles.modalView}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{label}</Text>
          <View style={styles.modalButtonBox}>
            <Text>{buttonLeftLabel}</Text>
            <Text>{buttonRightLabel}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
