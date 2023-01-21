import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import Input from "@components/input/Input";

const MentorQuestion = () => {
  return (
    <>
      <View style={styles.titleBox}>
        <Text style={styles.mainTitle}>
          멘토에게{"\n"}궁금한 것을 적어주세요👇
        </Text>
      </View>
      <Input
        type="default"
        value=""
        placeholder={"자유롭게 질문을 적어주세요."}
        multiline={true}
        maxLength={40}
      />
    </>
  );
};

export default MentorQuestion;
