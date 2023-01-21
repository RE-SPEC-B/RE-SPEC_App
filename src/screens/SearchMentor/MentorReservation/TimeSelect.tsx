import { View, Text } from "react-native";
import React from "react";
import Button from "@components/button/Button";
import { styles } from "./styles";

const TimeSelect = () => {
  return (
    <>
      <View style={styles.titleBox}>
        <Text style={styles.mainTitle}>멘토링{"\n"}시간을 선택해주세요👇</Text>
        <Text style={styles.subTitle}>
          멘토와 간단한 인사와 질문 3개 정도를 할 수 있어요!
        </Text>
      </View>
      <View style={styles.timeSelectBox}>
        <View style={{ width: 108 }}>
          <Button type="primary" label="20분" disabled={false} />
        </View>
        <View style={{ width: 108 }}>
          <Button type="primary" label="40분" disabled={true} />
        </View>
        <View style={{ width: 108 }}>
          <Button type="primary" label="60분" disabled={true} />
        </View>
      </View>
    </>
  );
};

export default TimeSelect;
