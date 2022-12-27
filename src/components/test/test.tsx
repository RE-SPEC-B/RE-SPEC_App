import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import { View, Text } from "react-native";

interface ITest {
  text: string;
  isSvg: boolean;
}

const Test = ({ text, isSvg }: ITest) => {
  return (
    <View>
      <Text>{text}</Text>
      {isSvg && <SvgIcon name={"like"} />}
    </View>
  );
};

export default Test;
