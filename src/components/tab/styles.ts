import { StyleSheet } from "react-native";

const tabStyles = {
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

export default tabStyles;
