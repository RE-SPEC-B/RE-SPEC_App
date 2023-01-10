import SvgIcon from "@components/svg/SvgIcon";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgIconProps } from "@components/svg/SvgIcon";
import tagStyles from "./styles";

export interface ITagProps {
  size?: "small" | "big";
  onChange?: () => void;
  selected?: boolean;
  emoji?: string;
  label?: string;
  svg?: SvgIconProps["name"];
}

/**
 * 직무태그, 검색태그일 경우 size = "big"
 */
const Tag = (props: ITagProps) => {
  const {
    size = "small",
    onChange = () => console.log("tag!"),
    selected = false,
    emoji,
    label,
    svg,
  } = props;

  const styles = tagStyles(size);
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

export default Tag;

const styles = StyleSheet.create({
  tag: {
    maxWidth: 90,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  typeBlack: {
    backgroundColor: EBgColor.BG_BLACK,
  },
  typeGrey: {
    backgroundColor: EBgColor.BG_GRAY,
    borderColor: EBgColor.LN_GRAY,
    borderWidth: 1,
  },
  label: {
    textAlign: "center",
    ...Fonts.body3,
  },
  labelBlack: {
    color: "white",
  },
  labelGrey: {
    color: EFontColor.SUB_GRAY,
  },
});
