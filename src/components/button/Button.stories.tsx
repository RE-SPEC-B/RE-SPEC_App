import { storiesOf } from "@storybook/react-native";
import Button from "./Button";
import PopupButton from "./PopupButton";

storiesOf("Button", module)
  .add("primary", () => (
    <Button type="primary" label="button" disabled={false} />
  ))
  .add("secondary", () => (
    <Button type="secondary" label="button" disabled={false} />
  ))
  .add("tertiary", () => (
    <Button type="tertiary" label="button" disabled={false} />
  ))
  .add("disabled", () => (
    <Button type="primary" label="button" disabled={true} />
  ))
  .add("popup-submit", () => <PopupButton type="submit" label="네" />)
  .add("popup-cancel", () => <PopupButton type="cancel" label="아니오" />);
