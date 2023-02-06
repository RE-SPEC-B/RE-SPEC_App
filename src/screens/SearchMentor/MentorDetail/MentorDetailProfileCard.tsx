import { EGradientProfile } from "@components/element/GradientDefine";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Profile from "@components/element/Profile";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";

interface IMentorDetailProfileCardProps {
  profileUrl?: string;
  profileCareer: number;
  profileName: string;
  profileSchool: string;
}

export default function MentorDetailProfileCard(
  props: IMentorDetailProfileCardProps,
) {
  const { profileUrl, profileCareer, profileName, profileSchool } = props;

  return (
    <View>
      <View style={styles.profileImg}>
        <Profile imageUri={profileUrl} level={EGradientProfile.LEVEL_4} />
      </View>
      <View style={styles.profileInfo}>
        <Text style={Fonts().title1}>{profileName}</Text>
        <Text style={[styles.profileSchool, Fonts().body2]}>
          {profileSchool}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileInfo: {
    marginTop: 24,
    flexDirection: "column",
    alignItems: "center",
  },
  profileSchool: {
    marginTop: 16,
    color: EColor.GRAY_700,
  },
});
