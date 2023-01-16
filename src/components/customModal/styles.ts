import { StyleSheet, Dimensions } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
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
    width: 218, // 버튼 생기면 100%로 사이즈 맞추기. 나머지도 확인
    height: 48,
  },
});
