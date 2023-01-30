import { Fonts } from "@styles/font";
import { Text, View } from "react-native";
import tagStyles from "./styles";

export interface ITagProps {
  size?: "smallB" | "smallG" | "bigM" | "bigW";
  emoji?: string;
  label?: string;
}

/**
 * @param size 버튼타입
 * 직무태그, 검색태그일 경우 "big"
 * 멘토상태일 경우 "small"
 */
const Tag = (props: ITagProps) => {
  const { size = "smallB", label } = props;

  const styles = tagStyles(size);
  return (
    <View style={[styles.tagWrapper]}>
      <Text style={[Fonts().body3, styles.label]}>{label}</Text>
    </View>
  );
};

export default Tag;
