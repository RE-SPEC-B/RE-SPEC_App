import { useGetType } from "@hooks/useGetType";
import { ReactNode } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { sectionType } from "./Section";

interface ILayout {
  children: ReactNode;
}

export const LayoutMain = (props: ILayout) => {
  const { children } = props;
  const styles = StyleSheet.create({
    layout: {
      marginHorizontal: 24,
    },
  });
  const section = useGetType(children, sectionType);
  return <SafeAreaView style={styles.layout}>{section}</SafeAreaView>;
};

export const LayoutScroll = (props: ILayout) => {
  const { children } = props;
  const styles = StyleSheet.create({
    layout: {
      marginHorizontal: 24,
    },
  });
  const section = useGetType(children, sectionType);
  return (
    <ScrollView>
      <SafeAreaView style={styles.layout}>{section}</SafeAreaView>
    </ScrollView>
  );
};
