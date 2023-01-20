import { EColor } from "@styles/color";
import { StyleSheet } from "react-native";

const pageStyles = StyleSheet.create({
  profileImg: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileInfo: {
    marginTop: 24,
    flexDirection: "column",
    alignItems: "center",
  },
  profileSchool: {
    marginTop: 16,
    color: EColor.GRAY_700,
  },
  careerTag: {
    marginTop: 24,
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
  ratings: {
    marginTop: 32,
    flexDirection: "row",
    marginLeft: 24,
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
  introduce: {
    marginTop: 40,
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
    textDecorationLine: "underline",
    textDecorationColor: EColor.GRAY_600,
  },
  introduceSubDescription: {
    marginTop: 68,
    color: EColor.GRAY_500,
    fontWeight: "400",
  },
});

export default pageStyles;
