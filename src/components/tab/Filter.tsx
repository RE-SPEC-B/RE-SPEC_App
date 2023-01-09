import { EFontColor } from "@styles/color";
import { Fonts } from "@styles/font";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import useTab from "./useTab";

export interface IFilterOptions<T> {
  disabled: boolean;
  label: string;
  value: T;
}

interface IFilterProps<T> {
  options: ReadonlyArray<IFilterOptions<T>>;
}

const styles = StyleSheet.create({
  filterWrapper: {
    flexDirection: "row",
    marginLeft: -24,
  },
  label: {
    marginLeft: 24,
  },
});

const Filter = <T,>({ options }: IFilterProps<T>) => {
  const { selected, changeSelected } = useTab(options);
  return (
    <View style={styles.filterWrapper}>
      {options.map(({ label, value, disabled }) => (
        <TouchableOpacity
          style={styles.label}
          onPress={() => changeSelected(value)}
        >
          <Text
            style={[
              Fonts().body1,
              selected === value
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

export default Filter;
