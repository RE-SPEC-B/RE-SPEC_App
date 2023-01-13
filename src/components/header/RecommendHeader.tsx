import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import {
  View,
  
  StyleSheet,
} from "react-native";

interface ImarkState {
  mentorId: string;
  bookmark: boolean;
}

const RecommendHeader = ({mentorId, bookmark}: ImarkState) => {
  
  const disabledBookmark = bookmark ? "markOn":  "markOff";

  return (
    <View style={styles.container}>
        <SvgIcon name="prev"/>
        <SvgIcon name={disabledBookmark}/>
    </View>
  );
};

export default RecommendHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 88,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
