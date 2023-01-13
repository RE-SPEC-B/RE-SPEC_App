import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import { Fonts } from "@styles/font";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const AppointmentHeader = () => {
  const font = Fonts();
  return (
    <View style={styles.container}>
        <SvgIcon name="prev"/>
        <Text style={{...styles.titleStyle, ...font.title2}}>멘토링 예약</Text>
    </View>
  );
};

export default AppointmentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  titleStyle: {
    lineHeight: 30,
    paddingHorizontal: 16,
    color: "#000000"
  }
});
