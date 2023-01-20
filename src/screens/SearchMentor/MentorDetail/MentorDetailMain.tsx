import { EGradientProfile } from "@components/element/GradientDefine";
import Profile from "@components/element/Profile";
import RecommendHeader from "@components/header/RecommendHeader";
import Tag from "@components/tag/Tag";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import pageStyles from "./styles";

// 더미 api data
import { data as d } from "./MentorDetail";
import { Fonts } from "@styles/font";

const MentorDetailMain = () => {
  // api hook 통해 데이터 호출.
  const styles = pageStyles;

  return (
    <ScrollView>
      <RecommendHeader mentorId="1" bookmark={d.isMarkOn} />
      <View style={styles.profileImg}>
        <Profile imageUri={d.profileUrl} level={EGradientProfile.LEVEL_4} />
      </View>
      <View style={styles.profileInfo}>
        <Text style={Fonts().title1}>{d.profileName}</Text>
        <Text style={[styles.profileSchool, Fonts().body2]}>
          {d.profileSchool}
        </Text>
      </View>
      <View style={styles.careerTag}>
        {d.careerTag.map((tag) => (
          <View style={styles.tag}>
            <Tag size={"smallB"} label={tag} selected={true} />
          </View>
        ))}
      </View>
      <View style={styles.personalityTag}>
        {d.personalityTag.map((tag) => (
          <View style={styles.tag}>
            <Tag size={"smallB"} label={tag} selected={false} />
          </View>
        ))}
      </View>
      <View style={styles.ratings}>
        <View style={styles.rating}>
          <Text style={[Fonts().title1, styles.ratingText]}>
            {d.mentoringNum}
          </Text>
          <Text style={[Fonts().body3, styles.ratingText]}>멘토링</Text>
        </View>
        <View style={styles.rating}>
          <Text style={[Fonts().title1, styles.ratingText]}>
            {d.portfolioNum}
          </Text>
          <Text style={[Fonts().body3, styles.ratingText]}>
            포트폴리오 첨삭
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={[Fonts().title1, styles.ratingText]}>
            {d.satisfaction}
          </Text>
          <Text style={[Fonts().body3, styles.ratingText]}>만족도</Text>
        </View>
      </View>
      <View style={styles.introduce}>
        <View>
          <View style={styles.introduceUpper}>
            <Text style={[Fonts().title1, styles.introduceText]}>저는 </Text>
            <Text
              style={[
                Fonts().title1,
                styles.introduceTextEmphasis,
                styles.introduceTextEmphasisUnderline,
              ]}
            >
              {d.profileCompany}
            </Text>
            <Text style={[Fonts().title1, styles.introduceText]}>, </Text>
            <Text style={[Fonts().title1, styles.introduceTextEmphasis]}>
              {d.profileJob}
            </Text>
          </View>
          <Text style={[Fonts().title1, styles.introduceText]}>
            직군입니다.
          </Text>
        </View>

        <Text style={[Fonts().body1, styles.introduceSubDescription]}>
          {d.profileJobSubstring}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MentorDetailMain;
