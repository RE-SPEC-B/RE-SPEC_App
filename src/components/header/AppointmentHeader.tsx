import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
// import { Fonts } from "@styles/font";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const AppointmentHeader = () => {
  return (
    <View style={styles.container}>
        <SvgIcon name="prev"/>
        <Text style={{...styles.titleStyle}}>멘토링 예약</Text>
    </View>
  );
};

export default AppointmentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    justifyContent: "flex-start",
    alignContent: "center",
    marginHorizontal: 24,
    marginVertical: 24,
  },
  titleStyle: {
    fontSize: 22,
    marginHorizontal: 16,
    fontWeight: "bold",
    color: "#000000"
  }
});
