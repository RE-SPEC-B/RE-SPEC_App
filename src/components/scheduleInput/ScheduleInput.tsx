import { TouchableHighlight, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import SvgIcon from "@components/svg/SvgIcon";

interface IScheduleInput {
  success: boolean;
  labelLeft: String;
  labelRight: String | undefined;
  onClick?: () => void;
}

const ScheduleInput = ({ success, labelLeft, labelRight, onClick }: IScheduleInput) => {
  const successButton = success ? styles.success : {};
  const successText = success ? styles.successPlaceHolderLeft : {};
  return (
    <TouchableHighlight onPress={onClick} underlayColor={"#999FA4"}>
      <View style={{ ...styles.default, ...successButton }}>
        <Text style={{ ...styles.defaultPlaceHolder, ...successText }}>
          {labelLeft}
        </Text>
        {success ? (
          <Text style={styles.successPlaceHolderRight}>{labelRight}</Text>
        ) : (
          <SvgIcon name="plus" />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleInput;
