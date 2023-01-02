import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@navigations/RootNavigator";

const LOAD_STORYBOOK = false;

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default LOAD_STORYBOOK ? require("./storybook").default : App;
