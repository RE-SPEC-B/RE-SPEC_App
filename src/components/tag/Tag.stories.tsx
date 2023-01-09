import { storiesOf } from "@storybook/react-native";
import Tag from "./Tag";

storiesOf("Tag", module)
  .add("label", () => <Tag label="zz" />)
  .add("withEmoji", () => <Tag label="동문보기" emoji="🙌" />)
  .add("withSvg", () => <Tag svg={"filter"} />);
