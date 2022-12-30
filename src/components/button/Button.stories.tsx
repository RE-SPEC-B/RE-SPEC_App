import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

storiesOf("Button", module)
  .add("main", () => <Button title="button" disabled={false} />)
  .add("disabled", () => <Button title="button" disabled={true} />);
