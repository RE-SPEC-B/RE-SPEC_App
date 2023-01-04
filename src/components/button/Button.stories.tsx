import { storiesOf } from "@storybook/react-native";
import Button from "./Button";

storiesOf("Button", module)
  .add("main", () => <Button label="button" disabled={false} />)
  .add("disabled", () => <Button label="button" disabled={true} />);
