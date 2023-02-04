import { StyleSheet, Dimensions } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  midday: {
    color: EColor.GRAY_900,
    ...Fonts().body2,
    fontWeight: "700",
    lineHeight: 14,
  },
  timeSelectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 124,
    paddingTop: 24,
    paddingRight: 24,
    paddingLeft: 32,
    paddingBottom: 40,
    backgroundColor: EColor.GRAY_800,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputTextBox: {
    width: 122,
    height: 48,
    justifyContent: "space-between",
  },
  dateText: {
    ...Fonts().title4,
    lineHeight: 24,
    color: "#EAF1F4",
  },
  timeText: {
    ...Fonts().body3,
    lineHeight: 14,
    color: "#EAF1F4",
  },
});
