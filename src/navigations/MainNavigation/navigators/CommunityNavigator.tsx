import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityScreen from "@screens/CommunityScreen";
import { CommunityStackParamList } from "@defines/navigations";

const Stack = createNativeStackNavigator<CommunityStackParamList>();

const CommunityNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={CommunityScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default CommunityNavigator;
