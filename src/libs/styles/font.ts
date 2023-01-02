import { StyleSheet, Platform } from "react-native";

export const Fonts = () => {
  if (Platform.OS === "ios") {
    return StyleSheet.create({
      title1: {
        fontWeight: "bold",
        fontSize: 26,
      },
      title2: {
        fontWeight: "bold",
        fontSize: 20,
      },
      body1: {
        fontWeight: "bold",
        fontSize: 18,
      },
      body2: {
        fontWeight: "bold",
        fontSize: 16,
      },
      body3: {
        fontSize: 14,
      },
      body4: {
        fontSize: 12,
      },
    });
  }
  return StyleSheet.create({
    title1: {
      fontFamily: "NotoSans-Bold",
      fontSize: 26,
    },
    title2: {
      fontFamily: "NotoSans-Bold",
      fontSize: 20,
    },
    body1: {
      fontFamily: "NotoSans-Bold",
      fontSize: 18,
    },
    body2: {
      fontFamily: "NotoSans-Bold",
      fontSize: 16,
    },
    body3: {
      fontFamily: "NotoSans-Regular",
      fontSize: 14,
    },
    body4: {
      fontFamily: "NotoSans-Regular",
      fontSize: 12,
    },
  });
};
