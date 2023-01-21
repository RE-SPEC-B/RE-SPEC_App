import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import Button from "@components/button/Button";

const Payment = () => {
  return (
    <>
      <View style={styles.payBox}>
        <View style={styles.payTextBox}>
          <Text style={styles.payTextSub}>결제금액</Text>
          <Text style={styles.payTextMain}>40,000 원</Text>
        </View>
        <View style={styles.payButtonBox}>
          <View style={{ width: 167 }}>
            <Button type="tertiary" label="장바구니" disabled={false} />
          </View>
          <View style={{ width: 167 }}>
            <Button type="primary" label="결제하기" disabled={false} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Payment;
