import { EBgColor, EBrandColor, EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import {
  View,
  Button as RNButton,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface IButton {
  title: string;
  disabled: boolean;
}

const Button = ({ title, disabled }: IButton) => {
  const disabledButton = disabled ? styles.disabledButtonColor : {};
  const disabledTitle = disabled ? styles.disabledTitleColor : {};

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...disabledButton }}
      disabled={disabled}
    >
      <Text
        style={{
          ...styles.title,
          ...disabledTitle,
        }}
      >
        {title}
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
    borderColor: EBgColor.LN_GRAY,
    borderRadius: 8,
    backgroundColor: EBrandColor.MAIN_TEXT,
  },
  disabledButtonColor: {
    backgroundColor: EBgColor.BG_GRAY,
  },
  title: {
    textAlign: "center",
    color: "white",
    ...Fonts.body1,
  },
  disabledTitleColor: {
    color: EFontColor.SUB_GRAY,
  },
});
