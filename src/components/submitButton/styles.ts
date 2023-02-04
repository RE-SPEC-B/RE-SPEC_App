import { StyleSheet } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: EColor.GRAY_800,
    width: 132,
    height: 60,
    borderRadius: 8,
  },
  text: {
    ...Fonts().body1,
    color: EColor.GRAY_50,
  },
});
