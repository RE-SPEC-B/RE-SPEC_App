import React from "react";
import {
    View,
    Image,
    StyleSheet 
  } from "react-native";
import { EColor } from "@styles/color";

interface IProfile {
  imageUri?: string
}

const Profile = (props: IProfile) => {
  const { imageUri = "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__480.png" } = props;
    return (
      <View style={styles.container} >
          <Image 
            style={styles.image}
            source={{uri: imageUri}}
            resizeMode="cover"
          />
      </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container:{
      backgroundColor: EColor.GRAY_100,
      width: 140,
      height: 140,
      borderRadius: 70,
    },
    image: {
      width: 140,
      height: 140,
      borderRadius: 70,
      borderWidth: 2,
      borderColor: EColor.GRAY_300
    },
  });
