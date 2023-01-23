import SvgIcon from "@components/svg/SvgIcon";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgIconProps } from "@components/svg/SvgIcon";
import { smallTabStyles } from "./styles";

export interface ISmallTabProps {
  onChange?: () => void;
  selected?: boolean;
  emoji?: string;
  label?: string;
  svg?: SvgIconProps["name"];
}

const SmallTab = (props: ISmallTabProps) => {
  const {
    onChange = () => console.log("tag!"),
    selected = false,
    emoji,
    label,
    svg,
  } = props;

  const styles = smallTabStyles;
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  useEffect(() => {
    onChange();
  }, [isSelected]);
  return (
    <TouchableOpacity
      style={[
        styles.tagWrapper,
        isSelected ? styles.onSelectedTag : styles.offSelectedTag,
      ]}
      onPress={() => setIsSelected((state) => !state)}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text
        style={[
          emoji && styles.labelWithEmoji,
          Fonts().body3,
          isSelected ? styles.onSelectedLabel : styles.offSelectedLabel,
        ]}
      >
        {label}
      </Text>
      {svg && <SvgIcon name={svg} />}
    </TouchableOpacity>
  );
};

export default SmallTab;
