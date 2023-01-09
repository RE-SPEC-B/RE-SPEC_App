import SvgIcon from "@components/svg/SvgIcon";
import { EBgColor, EBrandColor, EColor, EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SvgIconProps } from "@components/svg/SvgIcon";

interface ITagProps {
  onChange?: () => void;
  selected?: boolean;
  emoji?: string;
  label?: string;
  svg?: SvgIconProps["name"];
}

const styles = StyleSheet.create({
  tagWrapper: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    // width: "auto",
  },
  emoji: {
    fontSize: 14,
  },
  labelWithEmoji: {
    marginLeft: 6,
  },
});

const Tag = (props: ITagProps) => {
  const {
    onChange = () => console.log("tag!"),
    selected = false,
    emoji,
    label,
    svg,
  } = props;
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  useEffect(() => {
    onChange();
  }, [isSelected]);
  return (
    <TouchableOpacity
      style={[
        styles.tagWrapper,
        isSelected
          ? {
              backgroundColor: EColor.MINT_50,
              borderColor: EBrandColor.MAIN_TEXT,
            }
          : {
              backgroundColor: EColor.GRAY_50,
              borderColor: EColor.GRAY_400,
            },
      ]}
      onPress={() => setIsSelected((state) => !state)}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[emoji && styles.labelWithEmoji, Fonts().body3]}>
        {label}
      </Text>
      {svg && <SvgIcon name={svg} />}
    </TouchableOpacity>
  );
};

export default Tag;
