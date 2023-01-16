import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { EColor } from "@styles/color";
import Gradient from "./Gradient";
import { EGradientProfile } from "./GradientDefine";

interface IProfile {
  level?: EGradientProfile;
  imageUri?: string;
}

/**
 *
 * @param level
 * EGradientProfile enum값 사용.
 */
const Profile = (props: IProfile) => {
  const {
    imageUri = "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png",
    level = EGradientProfile.NONE,
  } = props;
  return (
    <View style={styles.container}>
      <Gradient level={level}>
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
          resizeMode="cover"
        />
      </Gradient>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: EColor.GRAY_100,
    width: 140,
    height: 140,
  },
  image: {
    width: 136,
    height: 136,
    borderRadius: 70,
  },
});
