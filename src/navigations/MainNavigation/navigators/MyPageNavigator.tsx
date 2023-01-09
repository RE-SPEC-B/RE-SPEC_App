import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageScreen from "@screens/MyPageScreen";
import { MyPageStackParamList } from "@defines/navigations";

const Stack = createNativeStackNavigator<MyPageStackParamList>();

const MyPageNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
