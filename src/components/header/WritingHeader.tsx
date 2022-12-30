import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import { Fonts } from "@styles/font";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";



const WritingHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.wrap}>
            <SvgIcon name="prev"/>
            <Text style={{...Fonts.title2, ...styles.titleStyle}}>글쓰기</Text>
        </View>
        <TouchableOpacity>
            <Text style={{...Fonts.title2, ...styles.titleStyle}}>완료</Text>
        </TouchableOpacity>
    </View>
  );
};

export default WritingHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 24,
    marginVertical: 24,
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  titleStyle: {
    fontSize: 22,
    marginHorizontal: 16,
    fontWeight: "bold",
    color: "#000000"
  }
});
