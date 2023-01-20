import { StyleSheet, View } from "react-native";
import Chip from "@components/chip/Chip";
import { SequenceType, sequences } from "@defines/mentorFilter";

const SequenceView = ({ sequenceValue, setSequenceValue }) => {
  return (
    <View style={styles.filterSequenceView}>
      {sequences.map((value) => {
        const sequenceId = value.id as SequenceType;

        const onClick = () => {
          setSequenceValue(sequenceId);
        };
        return (
          <Chip
            type="filter"
            label={value.label}
            active={sequenceValue === sequenceId}
            onClick={onClick}
            key={sequenceId}
          />
        );
      })}
    </View>
  );
};

export default SequenceView;

const styles = StyleSheet.create({
  filterSequenceView: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
