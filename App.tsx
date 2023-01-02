import React from "react";
import { Platform, SafeAreaView, ScrollView, Text, View } from "react-native";

//세팅 시험용
import { Fonts } from "@styles/font";
import SvgIcon from "@components/svg/SvgIcon";
import ErrorBoundary from "@components/errorBoundary/ErrorBoundary";
// import { LOAD_STORYBOOK } from "@env";
import Tab from "@components/tab/Tab";
import { twoTier, threeTier, fourTier } from "@components/tab/Tab.stories";

const LOAD_STORYBOOK = false;

const App = () => {
  const Font = Fonts();
  return (
    <ErrorBoundary fallback={<View></View>}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>{Platform.OS}</Text>
            <Tab options={twoTier} />
            <Tab options={threeTier} />
            <Tab options={fourTier} />
            <Text style={Font.title1}>테스트</Text>
            <Text style={Font.title2}>테스트</Text>
            <Text style={Font.body1}>테스트</Text>
            <Text style={Font.body2}>테스트</Text>
            <Text style={Font.body3}>테스트</Text>
            <SvgIcon name={"add"} />
            <SvgIcon name={"communityOff"} />
            <SvgIcon name={"homeOff"} />
            <SvgIcon name={"homeOn"} />
            <SvgIcon name={"pen"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ErrorBoundary>
  );
};

export default LOAD_STORYBOOK ? require("./storybook").default : App;
