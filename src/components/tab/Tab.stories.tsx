import { storiesOf } from "@storybook/react-native";
import Filter from "./Filter";
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

export const fourTierFilter = [
  {
    disabled: false,
    label: "경력",
    value: "경력",
  },
  {
    disabled: false,
    label: "학력",
    value: "학력",
  },
  {
    disabled: false,
    label: "회사",
    value: "회사",
  },
  {
    disabled: false,
    label: "기능",
    value: "기능",
  },
];

storiesOf("Tab", module)
  .add("twoTier", () => <Tab options={twoTier} />)
  .add("threeTier", () => <Tab options={threeTier} />)
  .add("fourTier", () => <Tab options={fourTier} />)
  .add("filter", () => <Filter options={fourTierFilter} />);
