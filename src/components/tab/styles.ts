import { EColor } from "@styles/color";
import { StyleSheet } from "react-native";

export const tabStyles = {
  twoTier: StyleSheet.create({
    tabWrapper: {
      height: 60,
      paddingTop: 20,
      flexDirection: "row",
      alignItems: "flex-start",
      paddingLeft: 9,
    },
    tabItem: {
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
      marginLeft: 16,
    },
    tabLabel: {
      lineHeight: 24,
    },
  }),
  threeTier: StyleSheet.create({
    tabWrapper: {
      height: 60,
      paddingTop: 20,
      flexDirection: "row",
      alignItems: "flex-start",
      paddingLeft: 9,
    },
    tabItem: {
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
      marginLeft: 16,
    },
    tabLabel: {
      lineHeight: 24,
    },
  }),
  fourTier: StyleSheet.create({
    tabWrapper: {
      height: 60,
      paddingTop: 20,
      flexDirection: "row",
      alignItems: "flex-start",
      paddingLeft: 25,
    },
    tabItem: {
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
      minWidth: 85,
    },
    tabLabel: {
      lineHeight: 24,
      textAlign: "center",
    },
  }),
};

export const smallTabStyles = StyleSheet.create({
  tagWrapper: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  emoji: {
    fontSize: 14,
  },
  labelWithEmoji: {
    marginLeft: 6,
  },
  onSelectedTag: {
    backgroundColor: EColor.MINT_50,
    borderColor: EColor.MINT_500,
  },
  offSelectedTag: {
    backgroundColor: EColor.GRAY_50,
    borderColor: EColor.GRAY_400,
  },
  onSelectedLabel: {
    color: EColor.GRAY_900,
  },
  offSelectedLabel: {
    color: EColor.GRAY_900,
  },
});
