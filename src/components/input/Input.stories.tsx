import { storiesOf } from "@storybook/react-native";
import Input from "./Input";

storiesOf("Input", module)
  .add("default", () => (
    <Input type="default" value="" placeholder={"닉네임"} />
  ))
  .add("numberic", () => (
    <Input type="numeric" value="" placeholder={"닉네임"} />
  ))
  .add("email-address", () => (
    <Input type="email-address" value="" placeholder={"닉네임"} />
  ))
  .add("multiline", () => (
    <Input
      type="default"
      value=""
      placeholder={"닉네임"}
      multiline={true}
      maxLength={50}
    />
  ));
