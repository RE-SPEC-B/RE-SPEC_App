import { storiesOf } from "@storybook/react-native";
import Tag from "./Tag";
import FilterTag from "./FilterTag";

storiesOf("Tag", module)
  .add("black", () => <Tag label={"#1~4년차"} type={"black"} />)
  .add("grey", () => <Tag label={"전문적인"} type={"grey"} />)
  .add("mint", () => <FilterTag label={"#국내MBA"} />);
