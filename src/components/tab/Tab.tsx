import { EBgColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

interface ITabOptions<T> {
  disabled: boolean;
  label: string;
  value: T;
}

interface ITabProps<T> {
  options: ReadonlyArray<ITabOptions<T>>;
}

const styles = StyleSheet.create({
  tabWrapper: {
    height: 60,
    paddingTop: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  twoTier: {},
  threeTier: {},
  fourTier: {
    minWidth: 85,
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomWidth: 4,
    borderBottomColor: EBgColor.LN_BLACK,
    textAlign: "center",
  },
});

const Tab = <T,>(props: ITabProps<T>) => {
  const { options } = props;
  return (
    <View style={styles.tabWrapper}>
      {options.map((option) => (
        <TouchableOpacity style={styles.tabItem} key={`tab_${option.value}`}>
          <Text style={Fonts.title2}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tab;
