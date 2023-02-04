import { StyleSheet, Platform } from "react-native";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";

export const styles = StyleSheet.create({
  calendar: {
    width: 342,
    height: 368,
  },
  customHeader: {
    color: EColor.GRAY_900,
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
    color: EColor.GRAY_500,
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
    color: EColor.GRAY_900,
    ...Fonts().body4,
    fontSize: 16,
  },
  disabledText: {
    color: EColor.GRAY_500,
    ...Fonts().body4,
    fontSize: 16,
  },
  defaultText: {
    color: EColor.GRAY_900,
    ...Fonts().body4,
    fontSize: 16,
  },
  customDay: {
    textAlign: "center",
  },
  infoText: {
    marginTop: Platform.OS === "android" ? 18 : 0,
    color: EColor.GRAY_500,
    ...Fonts().body4,
  },
  selected: {
    backgroundColor: EColor.MINT_500,
    borderRadius: 8,
  },
  calendarContainer: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
