import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";

interface ISelcetButton {
  label: string;
  selected: boolean;
  onClick?: () => void;
}

const TimeSelectButton = ({ label, selected, onClick }: ISelcetButton) => {
  const disabledButton = selected ? styles.selectedButton : {};
  const disabledLabel = selected ? styles.selectedText : {};
  return (
    <TouchableHighlight
      style={{ ...styles.button, ...disabledButton }}
      onPress={onClick}
    >
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
    backgroundColor: EColor.GRAY_800,
  },
  text: {
    ...Fonts().body3,
    fontWeight: "bold",
    color: EColor.GRAY_800,
  },
  selectedText: {
    color: "white",
  },
});

export default TimeSelectButton;
