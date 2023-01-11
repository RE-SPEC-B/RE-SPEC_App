/* eslint-disable prettier/prettier */
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomBarNavigator } from "@defines/navigations";
import CommunityNavigator from "@navigations/MainNavigation/navigators/CommunityNavigator";
import HomeNavigator from "@navigations/MainNavigation/navigators/HomeNavigator";
import MyPageNavigator from "@navigations/MainNavigation/navigators/MyPageNavigator";
import SearchMentorNavigator from "@navigations/MainNavigation/navigators/SearchMentorNavigator";
import ScheduleNavigator from "./navigators/ScheduleNavigator";
import SvgIcon from "@components/svg/SvgIcon";

const BottomTab = createBottomTabNavigator<BottomBarNavigator>();

const MainNavigations = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={"BottomHome"}
      backBehavior="order"
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          width: "100%",
          height: Platform.OS === "android" ? 78 : 98,
        }
      }}
    >
      {/* home */}
      <BottomTab.Screen
        name={"BottomHome"}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <SvgIcon name="homeOn"/> : <SvgIcon name="homeOff"/>
            );
          }
        }}
      />
      {/* 멘토찾기 */}
      <BottomTab.Screen
        name={"BottomSearchMentor"}
        component={SearchMentorNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <SvgIcon name="searchOn"/> : <SvgIcon name="searchOff"/>
            );
          }
        }}
      />
      {/* 마이페이지 */}
      <BottomTab.Screen
        name={"BottomCommunity"}
        component={CommunityNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <SvgIcon name="communityOn"/> : <SvgIcon name="communityOff"/>
            );
          }
        }}
      />
      {/* 스케쥴 */}
      <BottomTab.Screen
        name={"BottomSchedule"}
        component={ScheduleNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <SvgIcon name="scheduleOn"/> : <SvgIcon name="scheduleOff"/>
            );
          }
        }}
      />
      {/* 커뮤니티 */}
      <BottomTab.Screen
        name={"BottomMyPage"}
        component={MyPageNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ? <SvgIcon name="mypageOn"/> : <SvgIcon name="mypageOff"/>
            );
          }
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigations;
