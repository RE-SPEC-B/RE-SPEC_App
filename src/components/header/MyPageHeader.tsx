import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

const MyPageHeader = () => {
  return (
    <View style={styles.container}>
        <SvgIcon name="prev"/>
    </View>
  );
};

export default MyPageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
