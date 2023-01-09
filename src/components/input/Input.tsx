import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { EColor } from "@styles/color";
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
    backgroundColor: EColor.GRAY_100,
    color: EColor.GRAY_900,
    borderWidth: 1,
    borderColor: EColor.GRAY_300,
    borderRadius: 8,
    placeholder: EColor.GRAY_500,
    ...Fonts().body3,
  },
  inputFocus: {
    // TODO: enum change
    backgroundColor: EColor.MINT_50,
    borderColor: EColor.MINT_500,
  },
});
