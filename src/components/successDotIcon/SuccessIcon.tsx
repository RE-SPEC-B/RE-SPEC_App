import { View } from "react-native";
import React from "react";
import { styles } from "./styles";

interface ISuccessIcon {
  success: boolean;
}

const SuccessIcon = ({ success }: ISuccessIcon) => {
  return success ? (
    <View style={styles.successOnBorder}>
      <View style={styles.successOnInner} />
    </View>
  ) : (
    <View style={styles.successOffBorder} />
  );
};

export default SuccessIcon;
