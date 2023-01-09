import { StyleSheet, Platform } from "react-native";

export const Fonts = () => {
  if (Platform.OS === "ios") {
    return StyleSheet.create({
      title1: {
        fontWeight: "700",
        fontSize: 28,
        lineHeight: 34,
      },
      title2: {
        fontWeight: "700",
        fontSize: 22,
        lineHeight: 28,
      },
      title3: {
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 26,
      },
      title4: {
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 24,
      },
      title5: {
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 24,
      },
      title6: {
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 24,
      },
      body1: {
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 22,
      },
      body2: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20,
      },
      body3: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20,
      },
      body4: {
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 18,
      },
      body5: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 18,
      },
    });
  }
  return StyleSheet.create({
    title1: {
      fontFamily: "NotoSans-Bold",
      fontSize: 28,
    },
    title2: {
      fontFamily: "NotoSans-Bold",
      fontSize: 22,
    },
    title3: {
      fontFamily: "NotoSans-Bold",
      fontSize: 20,
    },
    title4: {
      fontFamily: "NotoSans-Bold",
      fontSize: 18,
    },
    title5: {
      fontFamily: "NotoSans-Medium",
      fontSize: 18,
    },
    title6: {
      fontFamily: "NotoSans-Regular",
      fontSize: 18,
    },
    body1: {
      fontFamily: "NotoSans-Bold",
      fontSize: 16,
    },
    body2: {
      fontFamily: "NotoSans-Medium",
      fontSize: 14,
    },
    body3: {
      fontFamily: "NotoSans-Regular",
      fontSize: 14,
    },
    body4: {
      fontFamily: "NotoSans-Medium",
      fontSize: 12,
    },
    body5: {
      fontFamily: "NotoSans-Regular",
      fontSize: 12,
    },
  });
};
