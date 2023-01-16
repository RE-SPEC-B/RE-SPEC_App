import { EColor } from "@styles/color";
import { StyleSheet } from "react-native";
import { ITagProps } from "./Tag";

const tagStyles = (size: Pick<ITagProps, "size">["size"]) => {
  switch (size) {
    case "small":
      return StyleSheet.create({
        tagWrapper: {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 100,
          borderWidth: 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
        },
        emoji: {
          fontSize: 14,
        },
        labelWithEmoji: {
          marginLeft: 6,
        },
        onSelectedTag: {
          backgroundColor: EColor.MINT_50,
          borderColor: EColor.GRAY_900,
        },
        offSelectedTag: {
          backgroundColor: EColor.GRAY_50,
          borderColor: EColor.GRAY_400,
        },
        onSelectedLabel: {
          color: EColor.GRAY_900,
        },
        offSelectedLabel: {
          color: EColor.GRAY_900,
        },
      });
    case "smallB":
      return StyleSheet.create({
        tagWrapper: {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 8,
          borderWidth: 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
        },
        emoji: {
          fontSize: 14,
        },
        labelWithEmoji: {
          marginLeft: 6,
        },
        onSelectedTag: {
          backgroundColor: EColor.GRAY_800,
          borderColor: EColor.GRAY_800,
        },
        offSelectedTag: {
          backgroundColor: EColor.GRAY_100,
          borderColor: EColor.GRAY_300,
        },
        onSelectedLabel: {
          color: EColor.GRAY_50,
          fontWeight: "500",
        },
        offSelectedLabel: {
          color: EColor.GRAY_500,
        },
      });
    case "big":
      return StyleSheet.create({
        tagWrapper: {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 100,
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 18,
        },
        emoji: {
          fontSize: 14,
        },
        labelWithEmoji: {
          marginLeft: 6,
        },
        onSelectedTag: {
          backgroundColor: EColor.MINT_500,
          borderColor: EColor.MINT_500,
        },
        offSelectedTag: {
          backgroundColor: EColor.GRAY_50,
          borderColor: EColor.GRAY_300,
        },
        onSelectedLabel: {
          color: EColor.GRAY_50,
          fontWeight: "500",
        },
        offSelectedLabel: {
          color: EColor.GRAY_900,
        },
      });
  }
};

export default tagStyles;
