import { StyleSheet } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    width: 310,
    height: 56,
    backgroundColor: EColor.GRAY_100,
    borderRadius: 8,
  },
  defaultPlaceHolder: {
    ...Fonts().body3,
    fontWeight: "500",
    color: EColor.GRAY_400,
  },
  success: {
    width: 310,
    height: 56,
    backgroundColor: EColor.MINT_50,
    borderRadius: 8,
  },
  successPlaceHolderLeft: {
    ...Fonts().body1,
    color: EColor.GRAY_900,
  },
  successPlaceHolderRight: {
    ...Fonts().body3,
    color: EColor.GRAY_800,
  },
});
