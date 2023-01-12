import { storiesOf } from "@storybook/react-native";
import Input from "./Input";

storiesOf("Input", module).add("main", () => (
  <Input value="" placeholder={"닉네임"} disabled={false} />
));
