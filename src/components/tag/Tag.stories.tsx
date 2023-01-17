import { storiesOf } from "@storybook/react-native";
import Tag from "./Tag";
import FilterTag from "./FilterTag";

storiesOf("Tag", module)
  .add("label", () => <Tag label="zz" />)
  .add("labelBig", () => <Tag size="big" label="#국내MBA" />)
  .add("withEmoji", () => <Tag label="동문보기" emoji="🙌" />)
  .add("withSvg", () => <Tag svg={"filter"} />);
