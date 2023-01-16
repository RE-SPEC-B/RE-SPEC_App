import { TouchableHighlight, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

interface IScheduleInput {
  success: boolean;
  labelLeft: String;
  labelRight: String | undefined;
}

const ScheduleInput = ({ success, labelLeft, labelRight }: IScheduleInput) => {
  const successButton = success ? styles.success : {};
  const successText = success ? styles.successPlaceHolderLeft : {};
  return (
    <TouchableHighlight>
      <View style={{ ...styles.default, ...successButton }}>
        <Text style={{ ...styles.defaultPlaceHolder, ...successText }}>
          {labelLeft}
        </Text>
        {success ? (
          <Text style={styles.successPlaceHolderRight}>{labelRight}</Text>
        ) : (
          <Text>+버튼 들어갈자리</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleInput;
