import { StyleSheet, Dimensions } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  view: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: EColor.GRAY_50,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#00000099",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    width: 342,
    height: 184,
    borderRadius: 16,
    backgroundColor: EColor.GRAY_50,
  },
  modalText: {
    color: EColor.GRAY_900,
    ...Fonts().body3,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  modalButtonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 208, // 버튼 생기면 100%로 사이즈 맞추기. 나머지도 확인
    height: 48,
  },
  titleBox: {
    marginTop: 24,
    marginBottom: 32,
    lineHeight: 40,
  },
  mainTitle: {
    color: EColor.GRAY_900,
    ...Fonts().title1,
    lineHeight: 40,
    marginBottom: 16,
  },
  subTitle: {
    color: EColor.GRAY_500,
    ...Fonts().body3,
  },
  timeSelectBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scheduleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scheduleIconBox: {
    width: 16,
    height: 176, // 144(요소 height 총합) + 32(요소간 여백 * 4)
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scheduleIconLine: {
    backgroundColor: "#EAF1F4",
    width: 1,
    height: 48,
  },
  scheduleInputBox: {
    height: 218,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  payBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 170,
    padding: 24,
    borderTopWidth: 1,
    borderColor: EColor.GRAY_300,
  },
  payTextBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  payTextSub: {
    color: EColor.GRAY_500,
    ...Fonts().body5,
  },
  payTextMain: {
    color: EColor.GRAY_800,
    ...Fonts().title4,
    fontSize: 24,
  },
  payButtonBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
