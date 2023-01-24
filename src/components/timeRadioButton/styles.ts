import { StyleSheet } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  timeSelectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 108,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: EColor.MINT_500,
  },
  disabledButtonColor: {
    backgroundColor: EColor.GRAY_100,
  },
  label: {
    ...Fonts().body2,
    fontSize: 16,
    color: EColor.GRAY_50,
  },
  disabledLabelColor: {
    color: EColor.GRAY_400,
  },
});

// const colorStyles = StyleSheet.create({
//   primary: {
//     borderColor: EColor.MINT_500,
//     backgroundColor: EColor.MINT_500,
//   },
//   secondary: {
//     borderColor: EColor.GRAY_300,
//     backgroundColor: EColor.GRAY_100,
//   },
//   tertiary: {
//     borderColor: EColor.MINT_500,
//     backgroundColor: EColor.GRAY_50,
//   },
// });
// const labelStyles = StyleSheet.create({
//   primary: {
//     color: EColor.GRAY_50,
//   },
//   secondary: {
//     color: EColor.GRAY_500,
//   },
//   tertiary: {
//     color: EColor.MINT_500,
//   },
// });
