import Chip from "@components/chip/Chip";
import Filter from "@components/tab/Filter";
import { StyleSheet, View, useWindowDimensions } from "react-native";

const SearchView = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.filterSequenceView}>
      <View>
        <Filter
          options={[
            {
              disabled: false,
              label: "경력",
              value: "경력",
            },
            {
              disabled: false,
              label: "학력",
              value: "학력",
            },
            {
              disabled: false,
              label: "회사",
              value: "회사",
            },
            {
              disabled: false,
              label: "기능",
              value: "기능",
            },
          ]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: (width - 52) / 2 }}>
            <Chip type="option" label="1~4년차" active={false} />
          </View>
          <View style={{ width: (width - 52) / 2 }}>
            <Chip type="option" label="5~8년차" active={false} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  filterSequenceView: {
    marginHorizontal: 24,
  },
});
