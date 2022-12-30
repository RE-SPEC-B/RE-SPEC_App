import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";
import { HomeStackParamList } from "@types/navigations";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
