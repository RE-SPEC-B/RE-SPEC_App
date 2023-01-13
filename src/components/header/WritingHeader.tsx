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
  const font = Fonts();
  return (
    <View style={styles.container}>
        <View style={styles.wrap}>
            <SvgIcon name="prev"/>
            <Text style={{ ...styles.titleStyle, ...font.title2}}>글쓰기</Text>
        </View>
        <TouchableOpacity>
            <Text style={{...styles.titleStyle, ...font.title2}}>완료</Text>
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
    alignItems: "center",
    paddingHorizontal: 24,
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  titleStyle: {
    fontSize: 22,
    marginLeft: 16,
    fontWeight: "bold",
    color: "#000000"
  }
});
