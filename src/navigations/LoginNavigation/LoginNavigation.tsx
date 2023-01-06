import CalendarDrawer from "@components/calendarDrawer/CalendarDrawer";
import SelectTime from "@components/selectTime/SelectTime";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/LoginScreen";
import RegisterScreen from "@screens/RegisterScreen";
import { LoginStackParamList } from "@types/navigations";

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={CalendarDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigations;
