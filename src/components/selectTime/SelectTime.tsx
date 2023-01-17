import { View } from "react-native";
import React from "react";
import SelectButton from "../timeSelectButton/TimeSelectButton";
import SubmitButton from "../submitButton/SubmitButton";
import { styles } from "./styles";

const SelectTime = () => {
  return (
    <View style={styles.view}>
      <View style={styles.buttonAlign}>
        {/* <SelectButton label="11 : 00" selected={false} />
        <SelectButton label="11 : 00" selected={true} /> */}
        <SubmitButton />
      </View>
    </View>
  );
};

export default SelectTime;
