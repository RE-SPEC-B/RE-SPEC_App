import { storiesOf } from "@storybook/react-native";
import Tag from "./Tag";

storiesOf("Tag", module)
  .add("label", () => <Tag label="zz" />)
  .add("labelBl", () => <Tag size="smallB" label="#1~4년차" />)
  .add("labelBig", () => <Tag size="big" label="#국내MBA" />)
  .add("withEmoji", () => <Tag label="동문보기" emoji="🙌" />)
  .add("withSvg", () => <Tag svg={"filter"} />);
