import { EBrandColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IFilterTag {
  label: string;
}

const FilterTag = ({ label }: IFilterTag) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.label}>{label}</Text>
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
  label: {
    textAlign: "center",
    color: "white",
    ...Fonts.body4,
  },
});
