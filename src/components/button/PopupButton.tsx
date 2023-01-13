import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type PopupButtonType = "submit" | "cancel";
interface IPopupButton {
  type: PopupButtonType;
  label: string;
  onClick?: () => void;
}

const PopupButton = ({ type = "submit", label, onClick }: IPopupButton) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...colorStyles[type] }}
      onPress={onClick}
    >
      <Text
        style={{
          ...styles.label,
          ...labelStyles[type],
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PopupButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 17,
    borderRadius: 8,
  },
  label: {
    textAlign: "center",
    ...Fonts().body2,
  },
});

const colorStyles = StyleSheet.create({
  submit: {
    backgroundColor: EColor.GRAY_100,
  },
  cancel: {
    backgroundColor: EColor.GRAY_800,
  },
});
const labelStyles = StyleSheet.create({
  submit: {
    color: EColor.GRAY_500,
  },
  cancel: {
    color: EColor.GRAY_50,
  },
});
