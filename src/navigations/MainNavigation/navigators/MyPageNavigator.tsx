import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageScreen from "@screens/MyPageScreen";
import { MyPageStackParamList } from "@types/navigations";

const Stack = createNativeStackNavigator<MyPageStackParamList>();

const MyPageNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
