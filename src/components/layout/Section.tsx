import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface ISection {
  children?: ReactNode | ReactNode[];
}

const Section = (props: ISection) => {
  const { children } = props;
  const styles = StyleSheet.create({
    section: {
      marginTop: 56,
    },
  });
  return <View style={styles.section}>{children}</View>;
};

export const sectionType = (<Section />).type;

export default Section;
