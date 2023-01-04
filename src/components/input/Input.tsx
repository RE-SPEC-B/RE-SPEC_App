import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { EBgColor, EBrandColor, EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";

interface IInput {
  value: string;
  placeholder: string;
  disabled: boolean;
}

const Input = ({ value, placeholder, disabled }: IInput) => {
  const [text, setText] = useState(value);
  const [isFocus, setIsFocus] = useState(false);
  const focusInput = isFocus ? styles.inputFocus : {};
  return (
    <TextInput
      onChangeText={setText}
      value={text}
      style={{ ...styles.input, ...focusInput }}
      placeholder={placeholder}
      placeholderTextColor={styles.input.placeholder}
      onFocus={() => {
        console.log("onFocus");
        setIsFocus(true);
      }}
      onEndEditing={() => {
        console.log("onEndEditing");
        setIsFocus(false);
      }}
      onBlur={() => {
        console.log("onBlur");
        setIsFocus(false);
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: EBgColor.BG_GRAY,
    color: EFontColor.MAIN_BLACK,
    borderWidth: 1,
    borderColor: EBgColor.LN_GRAY,
    borderRadius: 8,
    placeholder: EFontColor.SUB_GRAY,
    ...Fonts.body3,
  },
  inputFocus: {
    // TODO: enum change
    backgroundColor: "#E5FCFD",
    borderColor: EBrandColor.MAIN_TEXT,
  },
});
