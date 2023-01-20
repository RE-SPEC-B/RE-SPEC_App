import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MentorDetailMain from "./MentorDetail/MentorDetailMain";

const MentorMainScreen = ({ navigations }) => {
  return (
    <SafeAreaView>
      <Text>MentorMain</Text>
      <MentorDetailMain />
    </SafeAreaView>
  );
};

export default MentorMainScreen;
