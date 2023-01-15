import { storiesOf } from "@storybook/react-native";
import Chip from "./Chip";

storiesOf("Chip", module)
  .add("filter", () => <Chip type="filter" label="인기순" active={true} />)
  .add("option", () => <Chip type="option" label="1~4년차" active={true} />);
