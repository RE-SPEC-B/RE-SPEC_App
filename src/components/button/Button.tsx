import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IButton {
  type: string;
  label: string;
  disabled: boolean;
}

const Button = ({ type = "primary", label, disabled }: IButton) => {
  const disabledButton = disabled ? styles.disabledButtonColor : {};
  const disabledLabel = disabled ? styles.disabledLabelColor : {};

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...colorStyles[type], ...disabledButton }}
      disabled={disabled}
    >
      <Text
        style={{
          ...styles.label,
          ...labelStyles[type],
          ...disabledLabel,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 21,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  disabledButtonColor: {
    backgroundColor: EColor.GRAY_300,
    borderColor: EColor.GRAY_300,
  },
  label: {
    textAlign: "center",
    ...Fonts().body1,
  },
  disabledLabelColor: {
    color: EColor.GRAY_500,
  },
});

const colorStyles = StyleSheet.create({
  primary: {
    borderColor: EColor.MINT_500,
    backgroundColor: EColor.MINT_500,
  },
  secondary: {
    borderColor: EColor.GRAY_300,
    backgroundColor: EColor.GRAY_100,
  },
  tertiary: {
    borderColor: EColor.GRAY_50,
    backgroundColor: EColor.MINT_500,
  },
});
const labelStyles = StyleSheet.create({
  primary: {
    color: EColor.GRAY_50,
  },
  secondary: {
    color: EColor.GRAY_500,
  },
  tertiary: {
    color: EColor.MINT_500,
  },
});
