import { EBgColor, EBrandColor, EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ITag {
  title: string;
  type: string;
}

const Tag = ({ title, type }: ITag) => {
  const tagStyles = {
    black: {
      type: styles.typeBlack,
      title: styles.titleBlack,
    },
    grey: {
      type: styles.typeGrey,
      title: styles.titleGrey,
    },
  };

  return (
    <View style={styles.container}>
      <View style={{ ...tagStyles[type].type, ...styles.tag }}>
        <Text style={{ ...tagStyles[type].title, ...styles.title }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
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
  title: {
    textAlign: "center",
    ...Fonts.body3,
  },
  titleBlack: {
    color: "white",
  },
  titleGrey: {
    color: EFontColor.SUB_GRAY,
  },
});
