import { View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

const DUMMY = ["20분", "40분", "60뿐"];

const TimeRadioButton = () => {
  const [value, setValue] = useState("20분");
  const handleChange = (time) => {
    setValue(time);
  };

  return (
    <View style={styles.timeSelectBox}>
      {DUMMY.map((data) => {
        let disabledButton = value === data ? {} : styles.disabledButtonColor;
        let disabledLabel = value === data ? {} : styles.disabledLabelColor;
        return (
          <TouchableHighlight
            onPress={() => handleChange(data)}
            style={{ ...styles.button, ...disabledButton }}
            underlayColor={"#999FA4"}
          >
            <Text style={{ ...styles.label, ...disabledLabel }}>{data}</Text>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default TimeRadioButton;
