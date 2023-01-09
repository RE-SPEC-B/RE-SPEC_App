import CalendarDrawer from "@components/calendarDrawer/CalendarDrawer";
import SelectTime from "@components/selectTime/SelectTime";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/LoginScreen";
import RegisterScreen from "@screens/RegisterScreen";
import { LoginStackParamList } from "@defines/navigations";

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigations;
