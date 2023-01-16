import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

type InputType = "default" | "numeric" | "email-address";
interface IInput {
  type?: InputType;
  value: string;
  placeholder: string;
  onChange?: () => void;
  multiline?: boolean;
  maxLength?: number;
}

const Input = ({
  type,
  value,
  placeholder,
  onChange,
  multiline = false,
  maxLength,
}: IInput) => {
  const [text, setText] = useState(value);
  const [isFocus, setIsFocus] = useState(false);
  const focusInput = isFocus ? styles.inputFocus : {};
  return (
    <View style={{ ...styles.input, ...focusInput }}>
      <TextInput
        onChangeText={setText}
        value={text}
        keyboardType={type}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={styles.input.placeholder}
        onChange={onChange}
        maxLength={maxLength}
        onFocus={() => {
          setIsFocus(true);
        }}
        onEndEditing={() => {
          setIsFocus(false);
        }}
      />
      {multiline && (
        <Text style={styles.multilineLength}>
          {text.length} / {maxLength}자
        </Text>
      )}
    </View>
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
  multilineLength: {
    textAlign: "right",
    color: EColor.GRAY_400,
    ...Fonts().body4,
  },
});
