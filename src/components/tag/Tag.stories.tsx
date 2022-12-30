import { storiesOf } from "@storybook/react-native";
import Tag from "./Tag";
import FilterTag from "./FilterTag";

storiesOf("Tag", module)
  .add("black", () => <Tag title={"#1~4년차"} type={"black"} />)
  .add("grey", () => <Tag title={"전문적인"} type={"grey"} />)
  .add("mint", () => <FilterTag title={"#국내MBA"} />);
