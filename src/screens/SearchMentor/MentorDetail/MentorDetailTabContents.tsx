import Tab from "@components/tab/Tab";
import useTab from "@components/tab/useTab";
import { useState } from "react";
import { View } from "react-native";

interface IMentorDetailTabContents {}

export function MentorDetailTabContents() {
  const [contentsValue, setContentsValue] = useState<string | null>(null);
  const options = [
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
  return (
    <View>
      <Tab options={options} />
    </View>
  );
}
