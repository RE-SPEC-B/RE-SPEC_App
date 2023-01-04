import { EBgColor, EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ITag {
  label: string;
  type: string;
}

const Tag = ({ label, type }: ITag) => {
  const tagStyles = {
    black: {
      type: styles.typeBlack,
      label: styles.labelBlack,
    },
    grey: {
      type: styles.typeGrey,
      label: styles.labelGrey,
    },
  };

  return (
    <View style={{ ...tagStyles[type].type, ...styles.tag }}>
      <Text style={{ ...tagStyles[type].label, ...styles.label }}>{label}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    maxWidth: 90,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  typeBlack: {
    backgroundColor: EBgColor.BG_BLACK,
  },
  typeGrey: {
    backgroundColor: EBgColor.BG_GRAY,
    borderColor: EBgColor.LN_GRAY,
    borderWidth: 1,
  },
  label: {
    textAlign: "center",
    ...Fonts.body3,
  },
  labelBlack: {
    color: "white",
  },
  labelGrey: {
    color: EFontColor.SUB_GRAY,
  },
});
