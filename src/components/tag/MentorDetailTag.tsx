import { EColor } from "@styles/color"
import { Text, StyleSheet } from "react-native"
import { Fonts } from "@styles/font"

interface IMentorDetailTagProps {
    label: string,
    isBlack: boolean
}

const MentorDetailTag = ({label, isBlack}: IMentorDetailTagProps) => {
    const fonts = Fonts();
    return(
        <Text style={[
            styles.tagWrapper,
            isBlack 
              ? {
                  backgroundColor: EColor.GRAY_800,
                  borderColor: EColor.GRAY_800,
                  color: EColor.GRAY_800
                }
              : {
                  backgroundColor: EColor.GRAY_100,
                  borderColor: EColor.GRAY_300,
                  color: EColor.GRAY_500
                },
            fonts.body2,
          ]}>{label}</Text>
    )
}

export default MentorDetailTag;

const styles = StyleSheet.create({
    tagWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });