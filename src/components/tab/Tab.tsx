import { EBgColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import tabStyles from "./styles";

interface ITabOptions<T> {
  disabled: boolean;
  label: string;
  value: T;
}

interface ITabProps<T> {
  options: ReadonlyArray<ITabOptions<T>>;
}

const Tab = <T,>(props: ITabProps<T>) => {
  const Font = Fonts();
  const { options } = props;
  const styles = () => {
    switch (options.length) {
      case 2:
        return tabStyles.twoTier;
      case 3:
        return tabStyles.threeTier;
      case 4:
        return tabStyles.fourTier;
    }
  };
  return (
    <View style={styles().tabWrapper}>
      {options.map((option) => (
        <TouchableOpacity style={styles().tabItem} key={`tab_${option.value}`}>
          <Text style={[Font.title2, styles().tabLabel]}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tab;
