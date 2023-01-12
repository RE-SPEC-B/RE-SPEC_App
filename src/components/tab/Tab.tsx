import { EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import tabStyles from "./styles";
import useTab from "./useTab";

export interface ITabOptions<T> {
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
  const { selected, changeSelected } = useTab(options);
  return (
    <View style={styles().tabWrapper}>
      {options.map(({ disabled, label, value }) => (
        <TouchableOpacity
          style={[
            styles().tabItem,
            value === selected && { borderBottomWidth: 4 },
          ]}
          key={`tab_${value}`}
          onPress={() => changeSelected(value)}
        >
          <Text
            style={[
              Font.title2,
              styles().tabLabel,
              value === selected
                ? { color: EFontColor.MAIN_BLACK }
                : { color: EFontColor.DISABLED },
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tab;
