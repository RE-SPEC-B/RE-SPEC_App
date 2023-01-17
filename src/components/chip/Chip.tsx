import React from "react";
import { StyleSheet, Text } from "react-native";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";

type ChipType = "filter" | "option";
interface IChip {
  type?: ChipType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Chip = ({ type, label, active = false, onClick }: IChip) => {
  const CHIPS = {
    filter: styles.filterChip,
    option: styles.optionChip,
  };
  const activeStyles = active ? { ...styles.active } : { ...styles.inactive };

  return (
    <Text onPress={onClick} style={{ ...CHIPS[type], ...activeStyles }}>
      {label}
    </Text>
  );
};

export default Chip;

const styles = StyleSheet.create({
  filterChip: {
    paddingVertical: 17,
    paddingHorizontal: 14,
    borderWidth: 1,
    textAlign: "center",
    width: "100%",
    ...Fonts().body1,
    maxWidth: 108,
    borderRadius: 8,
  },
  optionChip: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 1,
    textAlign: "center",
    ...Fonts().body2,
    maxWidth: 167,
    borderRadius: 8,
  },
  active: {
    backgroundColor: EColor.MINT_50,
    borderColor: EColor.MINT_500,
    color: EColor.MINT_500,
  },
  inactive: {
    backgroundColor: EColor.GRAY_100,
    borderColor: EColor.GRAY_300,
    color: EColor.GRAY_500,
  },
});
