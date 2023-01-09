import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IButton {
  label: string;
  disabled: boolean;
}

const Button = ({ label, disabled }: IButton) => {
  const disabledButton = disabled ? styles.disabledButtonColor : {};
  const disabledLabel = disabled ? styles.disabledLabelColor : {};

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...disabledButton }}
      disabled={disabled}
    >
      <Text
        style={{
          ...styles.label,
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
    borderColor: EColor.LN_GRAY,
    borderRadius: 8,
    backgroundColor: EColor.MAIN_TEXT,
  },
  disabledButtonColor: {
    backgroundColor: EColor.BG_GRAY,
  },
  label: {
    textAlign: "center",
    color: "white",
    ...Fonts().body1,
  },
  disabledLabelColor: {
    color: EColor.SUB_GRAY,
  },
});
