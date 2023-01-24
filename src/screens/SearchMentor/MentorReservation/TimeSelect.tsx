import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import TimeRadioButton from "@components/timeRadioButton/TimeRadioButton";

const TimeSelect = () => {
  return (
    <>
      <View style={styles.titleBox}>
        <Text style={styles.mainTitle}>멘토링{"\n"}시간을 선택해주세요👇</Text>
        <Text style={styles.subTitle}>
          멘토와 간단한 인사와 질문 3개 정도를 할 수 있어요!
        </Text>
      </View>
      <TimeRadioButton />
    </>
  );
};

export default TimeSelect;
