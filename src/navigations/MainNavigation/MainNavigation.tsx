/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomBarNavigator } from "@defines/navigations";
import CommunityNavigator from "@navigations/MainNavigation/navigators/CommunityNavigator";
import HomeNavigator from "@navigations/MainNavigation/navigators/HomeNavigator";
import MyPageNavigator from "@navigations/MainNavigation/navigators/MyPageNavigator";
import SearchMentorNavigator from "@navigations/MainNavigation/navigators/SearchMentorNavigator";

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
      {/* home */}
      <BottomTab.Screen name={"BottomHome"} component={HomeNavigator} />
      {/* 멘토찾기 */}
      <BottomTab.Screen
        name={"BottomSearchMentor"}
        component={SearchMentorNavigator}
      />
      {/* 마이페이지 */}
      <BottomTab.Screen name={"BottomMyPage"} component={MyPageNavigator} />
      {/* 커뮤니티 */}
      <BottomTab.Screen
        name={"BottomCommunity"}
        component={CommunityNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigations;
