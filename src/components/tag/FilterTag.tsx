import { EBgColor, EBrandColor, EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IFilterTag {
  title: string;
}

const FilterTag = ({ title }: IFilterTag) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default FilterTag;

const styles = StyleSheet.create({
  tag: {
    maxWidth: 100,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 25,
    backgroundColor: EBrandColor.MAIN_TEXT,
  },
  title: {
    textAlign: "center",
    color: "white",
    ...Fonts.body4,
  },
});
