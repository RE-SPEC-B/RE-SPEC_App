import React, {useState, useEffect} from "react";
import SvgIcon from "@components/svg/SvgIcon";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
  } from "react-native";
import Profile from "./Profile";
import { EColor } from "@styles/color";

const ProfileEdit = ({imageUri}: {imageUri:string|any|null}) => {
    const [image, setImage] = useState<string>(imageUri);

    const onPressEditImage = () => {
        setImage('https://cdn.pixabay.com/photo/2022/05/30/08/57/flowers-7230812_640.jpg')
    };

    return (
      <View style={styles.container} >
        <Profile imageUri={image} />
        <TouchableOpacity style={styles.button} onPress={onPressEditImage}>
          <SvgIcon name='profileEdit' />
        </TouchableOpacity>
      </View>
    );
};

export default ProfileEdit;

const styles = StyleSheet.create({
    container:{
      backgroundColor: EColor.GRAY_100,
      width: 140,
      height: 140,
      borderRadius: 70,
    },
    button: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        bottom: 0,
        right: 0,
        zIndex: 1,
    }
  });