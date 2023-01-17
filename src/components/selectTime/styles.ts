import { StyleSheet } from "react-native";
import { EBgColor } from "@styles/color";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: EBgColor.BG_WHITE,
  },
  buttonAlign: {
    flexDirection: "row",
  },
});
