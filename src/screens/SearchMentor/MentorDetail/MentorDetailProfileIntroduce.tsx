import { View, Text, StyleSheet } from "react-native";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";

interface IMentorDetailProfileIntroduceProps {
  profileCompany: string;
  profileJob: string;
  profileJobSubstring: string;
}

export default function MentorDetailProfileIntroduce(
  props: IMentorDetailProfileIntroduceProps,
) {
  const { profileCompany, profileJob, profileJobSubstring } = props;
  return (
    <View style={styles.introduce}>
      <View>
        <View style={styles.introduceUpper}>
          <Text style={[Fonts().title1, styles.introduceText]}>저는 </Text>
          <View style={styles.introduceTextEmphasisUnderline}>
            <Text style={[Fonts().title1, styles.introduceTextEmphasis]}>
              {profileCompany}
            </Text>
          </View>
          <Text style={[Fonts().title1, styles.introduceText]}>, </Text>
          <Text style={[Fonts().title1, styles.introduceTextEmphasis]}>
            {profileJob}
          </Text>
        </View>
        <Text style={[Fonts().title1, styles.introduceText]}>직군입니다.</Text>
      </View>

      <Text style={[Fonts().body1, styles.introduceSubDescription]}>
        {profileJobSubstring}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  introduce: {
    paddingTop: 40,
    paddingBottom: 48,
    paddingLeft: 24,
    backgroundColor: EColor.GRAY_800,
  },
  introduceUpper: {
    flexDirection: "row",
    marginBottom: 11,
  },
  introduceText: {
    color: EColor.GRAY_600,
  },
  introduceTextEmphasis: {
    color: "#33E5EF",
  },
  introduceTextEmphasisUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: EColor.GRAY_600,
  },
  introduceSubDescription: {
    marginTop: 68,
    color: EColor.GRAY_500,
    fontWeight: "400",
  },
});
