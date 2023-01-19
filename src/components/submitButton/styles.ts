import { StyleSheet } from "react-native";
import { EBrandColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: EBrandColor.MAIN_TEXT,
    width: 132,
    height: 60,
    borderRadius: 8,
  },
  text: {
    ...Fonts().body1,
    color: "white",
  },
});
