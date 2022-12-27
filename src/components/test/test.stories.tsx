import { storiesOf } from "@storybook/react-native";
import Test from "./test";

storiesOf("Test", module)
  .add("Svg", () => <Test text="test" isSvg={true} />)
  .add("noSvg", () => <Test text="test" isSvg={false} />);
