import React from "react";
import * as Icons from "@assets/svg/assets";
import { View } from "react-native";

export type SvgIconProps = {
  name: keyof typeof Icons;
};
function SvgIcon({ name }: SvgIconProps) {
  const Svg = Icons[name];
  return (
    <View>
      <Svg />
    </View>
  );
}

export default SvgIcon;
