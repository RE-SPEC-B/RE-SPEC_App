import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: EColor.GRAY_50,
  },
  dutyPositionWrap: {
    height: 46,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  dutyPositionSpeechBubble: {
    transform: [{ rotate: "-90deg" }],
    borderStyle: "solid",
    borderRightWidth: 10,
    borderBottomWidth: 14,
    borderLeftWidth: 10,
    marginRight: -10,
    marginLeft: 8,
    borderTopColor: EColor.GRAY_50,
    borderRightColor: EColor.GRAY_50,
    borderBottomColor: EColor.MINT_500,
    borderLeftColor: EColor.GRAY_50,
  },
  dutyPositionText: {
    paddingHorizontal: 16,
    borderRadius: 100,
    paddingVertical: 8,
    backgroundColor: EColor.MINT_500,
  },
  dutyPositionTextColor: {
    color: EColor.GRAY_50,
  },
  filterWrap: {
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  infoWrap: {
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterSequenceView: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterCureerView: {
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterCureerKeyView: {
    flexDirection: "column",
    minWidth: 150,
  },
  filterCureerFont: {
    ...Fonts().title4,
    color: EColor.GRAY_400,
    marginBottom: 32,
  },
  filterCureerFontActive: {
    ...Fonts().title4,
    color: EColor.GRAY_900,
    marginBottom: 32,
  },
  filterCureerOptionView: {
    minWidth: 192,
    flexDirection: "column",
    backgroundColor: EColor.GRAY_100,
    padding: 24,
    borderRadius: 8,
  },
  filterCureerOptionBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  filterCureerOptionFont: {
    ...Fonts().title6,
    color: EColor.GRAY_500,
    marginLeft: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 16,
    backgroundColor: EColor.GRAY_400,
  },
  filterCureerBottomView: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});

export { styles };
