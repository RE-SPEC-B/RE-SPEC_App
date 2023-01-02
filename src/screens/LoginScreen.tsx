import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="다음 페이지로 이동"
        onPress={() => navigation.navigate("RegisterScreen")}
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

export default LoginScreen;
