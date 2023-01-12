import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MentorDetailScreen from "@screens/SearchMentor/MentorDetailScreen";
import MentorMainScreen from "@screens/SearchMentor/MentorMainScreen";
import { SearchMentorStackParamList } from "@defines/navigations";
import MentorReservationScreen from "@screens/SearchMentor/MentorReservation/MentorReservationScreen";

const Stack = createNativeStackNavigator<SearchMentorStackParamList>();

const SearchMentorNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MentorReservation"
        component={MentorReservationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MentorMain"
        component={MentorMainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MentorDetail"
        component={MentorDetailScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default SearchMentorNavigator;
