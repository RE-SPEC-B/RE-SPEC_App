import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/defines/navigations";
import LoginNavigations from "./LoginNavigation/LoginNavigation";
import MainNavigations from "./MainNavigation/MainNavigation";
import TimeSelectNavigator from "./navigators/TimeSelectNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TimeSelectNavigator"
        component={TimeSelectNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
