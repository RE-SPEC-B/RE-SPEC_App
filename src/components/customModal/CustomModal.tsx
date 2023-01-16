import { View, Text, Modal } from "react-native";
import React from "react";
import { styles } from "./styles";
import PopupButton from "@components/button/PopupButton";

const CustomModal = ({ visible, label, buttonLeftLabel, buttonRightLabel }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalView}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{label}</Text>
          <View style={styles.modalButtonBox}>
            <View style={{ display: "flex", width: 105, height: 48 }}>
              <PopupButton type={"submit"} label={buttonLeftLabel} />
            </View>
            <View style={{ width: 105, height: 48 }}>
              <PopupButton type={"cancel"} label={buttonRightLabel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
