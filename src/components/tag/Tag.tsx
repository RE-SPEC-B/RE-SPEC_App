import { EBgColor, EBrandColor, EFontColor } from "@styles/color";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ITagProps {
  selected?: boolean;
  emoji?: string;
  label?: string;
}

const styles = StyleSheet.create({
  tagWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    // width: "auto",
  },
});

const Tag = (props: ITagProps) => {
  const { selected = false, emoji, label } = props;
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  return (
    <TouchableOpacity
      style={[
        styles.tagWrapper,
        isSelected
          ? {
              backgroundColor: EBgColor.BG_MINT,
              borderColor: EBrandColor.MAIN_TEXT,
            }
          : {
              backgroundColor: EBgColor.BG_WHITE,
              borderColor: EBgColor.LN_GRAY,
            },
      ]}
      onPress={() => setIsSelected(!selected)}
    >
      {emoji}
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
