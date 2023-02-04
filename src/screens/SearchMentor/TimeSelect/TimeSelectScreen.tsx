import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import TimeSelectButton from "@components/timeSelectButton/TimeSelectButton";
import Button from "@components/button/Button";

const TimeSelectScreen = () => {
  const [value, setValue] = useState("20분");
  const handleChange = (time) => {
    setValue(time);
  };
  console.log(value);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EAF1F4" }}>
      <View style={styles.view}>
        <Text style={{ ...styles.midday, marginBottom: 16 }}>오전</Text>
        <View style={{ ...styles.timeSelectBox, marginBottom: 48 }}>
          <TimeSelectButton
            label={"11 : 00"}
            selected={false}
            onClick={() => handleChange("11 : 00")}
          />
          <TimeSelectButton
            label={"11 : 30"}
            selected={true}
            onClick={() => handleChange("11 : 30")}
          />
        </View>
        <Text style={{ ...styles.midday, marginBottom: 16 }}>오후</Text>
        <View style={{ ...styles.timeSelectBox, marginBottom: 8 }}>
          <TimeSelectButton label={"1 : 00"} selected={false} />
          <TimeSelectButton label={"1 : 30"} selected={false} />
        </View>
        <View style={{ ...styles.timeSelectBox, marginBottom: 8 }}>
          <TimeSelectButton label={"2 : 00"} selected={false} />
          <TimeSelectButton label={"2 : 30"} selected={false} />
        </View>
        <View style={{ ...styles.timeSelectBox, marginBottom: 8 }}>
          <TimeSelectButton label={"3 : 00"} selected={false} />
          <TimeSelectButton label={"3 : 30"} selected={false} />
        </View>
        <View style={{ ...styles.timeSelectBox, marginBottom: 8 }}>
          <TimeSelectButton label={"4 : 00"} selected={false} />
          <TimeSelectButton label={"4 : 30"} selected={false} />
        </View>
        <View style={{ ...styles.timeSelectBox, marginBottom: 8 }}>
          <TimeSelectButton label={"5 : 00"} selected={false} />
          <TimeSelectButton label={"5 : 30"} selected={false} />
        </View>
        <View style={{ ...styles.timeSelectBox, marginBottom: 8 }}>
          <TimeSelectButton label={"6 : 00"} selected={false} />
          <TimeSelectButton label={"6 : 30"} selected={false} />
        </View>
      </View>
      <View style={styles.inputView}>
        <View style={styles.inputBox}>
          <View style={styles.inputTextBox}>
            <Text style={styles.dateText}>22년 12월 07일</Text>
            <Text style={styles.timeText}>오전 11 : 30</Text>
          </View>
          <View style={{ width: 132 }}>
            <Button type="primary" label="결제하기" disabled={false} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimeSelectScreen;
