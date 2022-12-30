import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import { View, Text } from "react-native";
import { useSize } from "@hooks/useSize";

interface ITest {
  text: string;
  isSvg: boolean;
}

const Test = ({ text, isSvg }: ITest) => {
  const { width, height } = useSize(100);
  return (
    <View
      style={{
        width,
        borderLeftWidth: 4,
        borderLeftColor: "#000000",
        borderRightColor: "#000000",
        borderRightWidth: 4,
      }}
    >
      <Text>{text}</Text>
      {isSvg && <SvgIcon name={"like"} />}
    </View>
  );
};

export default Test;
