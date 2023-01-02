import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityScreen from "@screens/CommunityScreen";
import { CommunityStackParamList } from "@types/navigations";

const Stack = createNativeStackNavigator<CommunityStackParamList>();

const CommunityNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default CommunityNavigator;
