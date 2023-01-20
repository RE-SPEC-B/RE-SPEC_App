import { EColor } from "@styles/color";
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
});

export { styles };
