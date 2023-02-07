import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ISection {
  children?: ReactNode | ReactNode[];
  marginTop?: number;
  noMarginHorizontal?: boolean;
}

const Section = (props: ISection) => {
  const { children, marginTop = 56, noMarginHorizontal = false } = props;

  const styles = StyleSheet.create({
    section: {
      marginTop: marginTop,
    },
  });
  return (
    <View
      style={[styles.section, noMarginHorizontal && { marginHorizontal: -24 }]}
    >
      {children}
    </View>
  );
};

export const sectionType = (<Section />).type;

export default Section;
