import { storiesOf } from "@storybook/react-native";
import Tab from "./Tab";

export const twoTier = [
  {
    disabled: false,
    label: "멘토소개",
    value: "멘토소개",
  },
  {
    disabled: false,
    label: "리뷰(123)",
    value: "리뷰(123)",
  },
];

export const threeTier = [
  {
    disabled: false,
    label: "멘토소개",
    value: "멘토소개",
  },
  {
    disabled: false,
    label: "포트폴리오 리뷰",
    value: "포트폴리오 리뷰",
  },
  {
    disabled: false,
    label: "리뷰(123)",
    value: "리뷰(123)",
  },
];

export const fourTier = [
  {
    disabled: false,
    label: "자유글",
    value: "자유글",
  },
  {
    disabled: false,
    label: "투표",
    value: "투표",
  },
  {
    disabled: false,
    label: "자랑하기",
    value: "자랑하기",
  },
  {
    disabled: false,
    label: "QnA",
    value: "QnA",
  },
];

storiesOf("Tab", module)
  .add("twoTier", () => <Tab options={twoTier} />)
  .add("threeTier", () => <Tab options={threeTier} />)
  .add("fourTier", () => <Tab options={fourTier} />);
