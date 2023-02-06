import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MentorDetail from "./MentorDetail/MentorDetail";

const MentorMainScreen = ({ navigations }) => {
  return (
    <SafeAreaView>
      <Text>MentorMain</Text>
      <MentorDetail />
    </SafeAreaView>
  );
};

export default MentorMainScreen;
