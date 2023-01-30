import { EColor } from "@styles/color";
import { StyleSheet } from "react-native";
import { ITagProps } from "./Tag";

const tagStyles = (size: Pick<ITagProps, "size">["size"]) => {
  switch (size) {
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
          backgroundColor: EColor.GRAY_800,
          borderColor: EColor.GRAY_800,
        },
        label: {
          color: EColor.GRAY_50,
          fontWeight: "500",
        },
      });
    case "smallG":
      return StyleSheet.create({
        tagWrapper: {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 8,
          borderWidth: 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: EColor.GRAY_100,
          borderColor: EColor.GRAY_300,
        },
        label: {
          color: EColor.GRAY_500,
        },
      });
    case "bigM":
      return StyleSheet.create({
        tagWrapper: {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 100,
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 18,
          backgroundColor: EColor.MINT_500,
          borderColor: EColor.MINT_500,
        },
        label: {
          color: EColor.GRAY_50,
          fontWeight: "500",
        },
      });
    case "bigW":
      return StyleSheet.create({
        tagWrapper: {
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 100,
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 18,
          backgroundColor: EColor.GRAY_50,
          borderColor: EColor.GRAY_300,
        },
        label: {
          color: EColor.GRAY_900,
        },
      });
  }
};

export default tagStyles;
