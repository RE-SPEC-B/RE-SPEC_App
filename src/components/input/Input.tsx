import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

type InputType = "default" | "numeric" | "email-address";
interface IInput {
  type?: InputType;
  value: string;
  placeholder: string;
  onChange?: () => void;
  multiline?: boolean;
}

const Input = ({
  type,
  value,
  placeholder,
  onChange,
  multiline = false,
}: IInput) => {
  const [text, setText] = useState(value);
  const [isFocus, setIsFocus] = useState(false);
  const focusInput = isFocus ? styles.inputFocus : {};
  return (
    <TextInput
      onChangeText={setText}
      value={text}
      keyboardType={type}
      style={{ ...styles.input, ...focusInput }}
      placeholder={placeholder}
      multiline={multiline}
      placeholderTextColor={styles.input.placeholder}
      onChange={onChange}
      onFocus={() => {
        setIsFocus(true);
      }}
      onEndEditing={() => {
        setIsFocus(false);
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingTop: 18, // multiline일때 vertical 값이 안먹힘
    paddingBottom: 18,
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
    backgroundColor: EColor.MINT_50,
    borderColor: EColor.MINT_500,
  },
});
