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
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.button, ...disabledButton }}
        disabled={disabled}
      >
        <Text
          style={{
            ...styles.title,
            ...disabledTitle,
            ...Fonts.body1,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
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
  },
  disabledTitleColor: {
    color: EFontColor.SUB_GRAY,
  },
});
