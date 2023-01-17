import { StyleSheet, Platform } from "react-native";
import { Fonts } from "@styles/font";
import { EBrandColor, EFontColor } from "@styles/color";

export const styles = StyleSheet.create({
  calendar: {
    width: 342,
    height: 368,
  },
  customHeader: {
    color: EFontColor.MAIN_BLACK,
    ...Fonts().body4,
    fontSize: 22,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 48,
    alignItems: "center",
  },
  week: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dayHeader: {
    marginTop: 0,
    marginBottom: 14,
    width: 32,
    textAlign: "center",
    color: EFontColor.SUB_GRAY,
    ...Fonts().body4,
    fontSize: 16,
  },
  base: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: Platform.OS === "android" ? 0 : 4,
    color: EFontColor.MAIN_BLACK,
    ...Fonts().body4,
    fontSize: 16,
  },
  disabledText: {
    color: EFontColor.SUB_GRAY,
    ...Fonts().body4,
    fontSize: 16,
  },
  defaultText: {
    color: EFontColor.MAIN_BLACK,
    ...Fonts().body4,
    fontSize: 16,
  },
  customDay: {
    textAlign: "center",
  },
  infoText: {
    marginTop: Platform.OS === "android" ? 18 : 0,
    color: EFontColor.SUB_GRAY,
    ...Fonts().body4,
  },
  selected: {
    backgroundColor: EBrandColor.MAIN_TEXT,
    borderRadius: 8,
  },
  calendarContainer: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
