import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Fonts } from "@styles/font";
import { EBgColor } from "@styles/color";

interface ISelcetButton {
  label: string;
  selected: boolean;
}

const TimeSelectButton = ({ label, selected }: ISelcetButton) => {
  const disabledButton = selected ? styles.selectedButton : {};
  const disabledLabel = selected ? styles.selectedText : {};
  return (
    <TouchableHighlight style={{ ...styles.button, ...disabledButton }}>
      <Text style={{ ...styles.text, ...disabledLabel }}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 167,
    height: 54,
    borderRadius: 8,
    backgroundColor: "white",
  },
  selectedButton: {
    backgroundColor: EBgColor.BG_BLACK,
  },
  text: {
    ...Fonts().body3,
    fontWeight: "bold",
    color: EBgColor.BG_BLACK,
  },
  selectedText: {
    color: "white",
  },
});

export default TimeSelectButton;
