import { StyleSheet } from "react-native";
import { Fonts } from "@styles/font";

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  modalDateTitle: {
    color: "black",
    ...Fonts().body4,
    fontSize: 20,
    marginTop: 54,
  },
});
