import { storiesOf } from "@storybook/react-native";
import Tag from "./Tag";

storiesOf("Tag", module)
  .add("tagSmallB", () => <Tag size="smallB" label="#1~4년차" />)
  .add("tagSmallG", () => <Tag size="smallG" label="전문적인" />)
  .add("tagBigM", () => <Tag size="bigM" label="#국내MBA" />)
  .add("tagBigW", () => <Tag size="bigW" label="1~4년차" />);
