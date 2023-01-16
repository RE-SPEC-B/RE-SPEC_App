import React, { useState, useEffect, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { EGradientProfile } from "./GradientDefine";

interface IGradient extends PropsWithChildren {
  level?: EGradientProfile;
}

const Gradient = ({ level, children }: IGradient) => {
  const [gradientColor, setGradientColor] = useState<string[]>([]);
  useEffect(() => {
    switch (level) {
      case EGradientProfile.NONE:
        setGradientColor((state) => []);
        break;
      case EGradientProfile.LEVEL_1:
        setGradientColor((state) => ["#007FF5", "#25FFD8"]);
        break;
      case EGradientProfile.LEVEL_2:
        setGradientColor((state) => ["#FD282A", "#FD7D00"]);
        break;
      case EGradientProfile.LEVEL_3:
        setGradientColor((state) => ["#FF007D", "#6153FF"]);
        break;
      case EGradientProfile.LEVEL_4:
        setGradientColor((state) => ["#FFEB37", "#00775A"]);
        break;
    }
  }, [level]);
  const styles = StyleSheet.create({
    profileGradient: {
      width: 140,
      height: 140,
      borderRadius: 70,
    },
    profile: {
      position: "absolute",
      top: 2,
      left: 2,
    },
  });
  return (
    <View>
      <LinearGradient colors={gradientColor} style={styles.profileGradient} />
      <View style={styles.profile}>{children}</View>
    </View>
  );
};

export default Gradient;
