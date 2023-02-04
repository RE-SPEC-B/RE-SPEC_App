import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TimeSelectParamList } from "@defines/navigations";
import TimeSelectScreen from "@screens/SearchMentor/TimeSelect/TimeSelectScreen";

const Stack = createNativeStackNavigator<TimeSelectParamList>();

const TimeSelectNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TimeSelect"
        component={TimeSelectScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default TimeSelectNavigator;
