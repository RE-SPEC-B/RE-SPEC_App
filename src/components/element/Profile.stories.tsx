import { storiesOf } from "@storybook/react-native";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";

const data = 'https://cdn.pixabay.com/photo/2022/12/28/21/10/night-7683839_640.jpg';
const data2 = 'https://cdn.pixabay.com/photo/2022/09/22/08/09/halloween-7471880__480.png';

storiesOf("profile", module)
  .add("profile1", () => <Profile imageUri={data} />)
storiesOf("profile", module)
  .add("profile2", () => <Profile imageUri={data2} />)
storiesOf("profile", module)
  .add("profile3", () => <Profile />)
storiesOf("profileEdit", module)
  .add("ProfileEdit1", () => <ProfileEdit imageUri={data2}/>)
storiesOf("profileEdit", module)
  .add("ProfileEdit2", () => <ProfileEdit />)
