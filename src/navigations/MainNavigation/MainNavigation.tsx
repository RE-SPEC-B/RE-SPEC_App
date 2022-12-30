/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomBarNavigator } from "@types/navigations";
import CommunityNavigator from "./navigators/CommunityNavigator";
import HomeNavigator from "./navigators/HomeNavigator";
import MyPageNavigator from "./navigators/MyPageNavigator";
import SearchMentorNavigator from "./navigators/SearchMentorNavigator";

const BottomTab = createBottomTabNavigator<BottomBarNavigator>();

const MainNavigations = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={"BottomHome"}
      backBehavior="order"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name={"BottomHome"}
        component={HomeNavigator}
      />
      <BottomTab.Screen
        name={"BottomSearchMentor"}
        component={SearchMentorNavigator}
      />
      <BottomTab.Screen
        name={"BottomMyPage"}
        component={MyPageNavigator}
      />
      <BottomTab.Screen
        name={"BottomCommunity"}
        component={CommunityNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigations;
