import React from "react";
import {
    View,
    Image,
    StyleSheet 
  } from "react-native";
import { EColor } from "@styles/color";

const Profile = ({imageUri}: {imageUri:string|any|null}) => {
    return (
      <View style={styles.container} >
        {imageUri !== '' && (
          <Image 
            style={styles.image}
            source={{uri: imageUri}}
            resizeMode="cover"
          />
        )}
        
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
