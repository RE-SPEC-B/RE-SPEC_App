import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
      <Button
        title="홈 화면으로 이동하기"
        onPress={() => navigation.navigate("MainNavigation")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;
