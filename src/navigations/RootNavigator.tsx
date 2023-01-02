import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@types/navigations";
import LoginNavigations from "./LoginNavigation/LoginNavigation";
import MainNavigations from "./MainNavigation/MainNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginNavigation"
        component={LoginNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainNavigation"
        component={MainNavigations}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
