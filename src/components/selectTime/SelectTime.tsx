import { View, StyleSheet } from "react-native";
import React from "react";
import SelectButton from "../timeSelectButton/TimeSelectButton";
import { EBgColor } from "@styles/color";
import SubmitButton from "../submitButton/SubmitButton";

const SelectTime = () => {
  return (
    <View style={styles.view}>
      <View style={styles.buttonAlign}>
        <SelectButton label="11 : 00" selected={false} />
        <SelectButton label="11 : 00" selected={true} />
        <SubmitButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SelectTime;
