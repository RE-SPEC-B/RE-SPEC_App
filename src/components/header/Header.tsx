import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Search from "./Search";

const Header = () => {
  return (
    <View style={styles.container}>
      <Search/>
        <View style={styles.svgStyle}>
        <SvgIcon name="alarm"/>
        </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  svgStyle: {
    marginTop: 8
  }
});
