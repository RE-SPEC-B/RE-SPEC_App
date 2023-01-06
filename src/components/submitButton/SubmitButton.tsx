import { Text, TouchableHighlight } from "react-native";
import React from "react";
import { styles } from "./styles";

const SubmitButton = () => {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.text}>확인</Text>
    </TouchableHighlight>
  );
};

export default SubmitButton;
