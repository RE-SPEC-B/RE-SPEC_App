import { StyleSheet, View } from "react-native";
import Tag from "@components/tag/Tag";

interface IMentorDetailProfileTagProps {
  careerTag: string[];
  personalityTag: string[];
}

export default function MentorDetailProfileTag(
  props: IMentorDetailProfileTagProps,
) {
  const { careerTag, personalityTag } = props;
  return (
    <View>
      <View style={styles.careerTag}>
        {careerTag.map((tag) => (
          <View style={styles.tag}>
            <Tag size={"smallB"} label={tag} />
          </View>
        ))}
      </View>
      <View style={styles.personalityTag}>
        {personalityTag.map((tag) => (
          <View style={styles.tag}>
            <Tag size={"smallG"} label={tag} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  careerTag: {
    marginLeft: -8,
    flexDirection: "row",
    justifyContent: "center",
  },
  personalityTag: {
    marginTop: 8,
    marginLeft: -8,
    flexDirection: "row",
    justifyContent: "center",
  },
  tag: {
    marginLeft: 8,
  },
});
