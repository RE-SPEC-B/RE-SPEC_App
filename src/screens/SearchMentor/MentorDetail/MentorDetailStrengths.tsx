import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";

interface IMentorDetailStrengths {
  strengths: string[];
}

export default function MentorDetailStrengths(props: IMentorDetailStrengths) {
  const { strengths } = props;
  return (
    <View>
      <Text style={[Fonts().title1, styles.strengthTitle]}>자신있어요! 😎</Text>

      <View style={styles.strengths}>
        {strengths?.map((strength) => {
          return (
            <Text style={[Fonts().title5, styles.strength]}>{strength}</Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  strengthTitle: {
    color: EColor.GRAY_900,
  },
  strengths: {
    marginTop: 32 - 22,
  },
  strength: {
    marginTop: 22,
    paddingVertical: 24,
    backgroundColor: EColor.GRAY_100,
    textAlign: "center",
  },
});
