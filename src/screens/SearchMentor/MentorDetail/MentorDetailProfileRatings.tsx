import { View, Text, StyleSheet } from "react-native";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";

interface IMentorDetailProfileRatingsProps {
  mentoringNum: number;
  portfolioNum: number;
  satisfaction: number;
}

export default function MentorDetailProfileRatings(
  props: IMentorDetailProfileRatingsProps,
) {
  const { mentoringNum, portfolioNum, satisfaction } = props;
  return (
    <View style={styles.ratings}>
      <View style={styles.rating}>
        <Text style={[Fonts().title1, styles.ratingText]}>{mentoringNum}</Text>
        <Text style={[Fonts().body3, styles.ratingText]}>멘토링</Text>
      </View>
      <View style={styles.rating}>
        <Text style={[Fonts().title1, styles.ratingText]}>{portfolioNum}</Text>
        <Text style={[Fonts().body3, styles.ratingText]}>포트폴리오 첨삭</Text>
      </View>
      <View style={styles.rating}>
        <Text style={[Fonts().title1, styles.ratingText]}>{satisfaction}</Text>
        <Text style={[Fonts().body3, styles.ratingText]}>만족도</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratings: {
    flexDirection: "row",
  },
  rating: {
    width: 114,
    height: 74,
    paddingVertical: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingText: {
    color: EColor.GRAY_700,
  },
});
