import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScheduleScreen from "@screens/ScheduleScreen";
import { ScheduleStackParamList } from "@defines/navigations";

const Stack = createNativeStackNavigator<ScheduleStackParamList>();

const ScheduleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={ScheduleScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default ScheduleNavigator;
