import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@navigations/RootNavigator";

const LOAD_STORYBOOK = false;

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default LOAD_STORYBOOK ? require("./storybook").default : App;
