import { View, StyleSheet } from "react-native";
import React from "react";

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

const styles = StyleSheet.create({
  successOnBorder: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 16,
    height: 16,
    borderColor: "#00DFEB",
    borderRadius: 24,
  },
  successOnInner: {
    width: 8,
    height: 8,
    backgroundColor: "#00DFEB",
    borderRadius: 24,
  },
  successOffBorder: {
    borderWidth: 1,
    width: 16,
    height: 16,
    borderColor: "#00DFEB",
    borderRadius: 24,
  },
});

export default SuccessIcon;
