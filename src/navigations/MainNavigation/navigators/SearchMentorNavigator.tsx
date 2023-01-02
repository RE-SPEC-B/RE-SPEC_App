import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchMentorScreen from "@screens/SearchMentorScreen";
import { SearchMentorStackParamList } from "@types/navigations";

const Stack = createNativeStackNavigator<SearchMentorStackParamList>();

const SearchMentorNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchMentorScreen"
        component={SearchMentorScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default SearchMentorNavigator;
