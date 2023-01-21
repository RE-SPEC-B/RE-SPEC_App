import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import Input from "@components/input/Input";

const PortfolioInput = () => {
  return (
    <>
      <View style={styles.titleBox}>
        <Text style={styles.mainTitle}>
          포트폴리오{"\n"}링크를 공유해주세요👇
        </Text>
        <Text style={styles.subTitle}>
          PDF 형대로 제출을 원하시는 경우, 구글드라이브{"\n"}업로드하여 해당 링크를 전달해 주세요.
        </Text>
      </View>
      <Input
        type="default"
        value=""
        placeholder={"포트폴리오 링크를 입력해주세요."}
      />
    </>
  );
};

export default PortfolioInput;
