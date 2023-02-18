import RecommendHeader from "@components/header/RecommendHeader";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

// 더미 api data
import { data as d } from "./Json";

import MentorDetailProfileCard from "./MentorDetailProfileCard";
import MentorDetailProfileTag from "./MentorDetailProfileTag";
import MentorDetailProfileRatings from "./MentorDetailProfileRatings";
import MentorDetailProfileIntroduce from "./MentorDetailProfileIntroduce";
import MentorDetailStrengths from "./MentorDetailStrengths";
import { ScrollLayout } from "@components/layout";
import { MentorDetailTabContents } from "./MentorDetailTabContents";

export default function MentorDetail() {
  // api hook 통해 데이터 호출.
  // const data = useApi(mentorDetail);

  return (
    <ScrollLayout>
      <ScrollLayout.Section marginTop={0} noMarginHorizontal={true}>
        <RecommendHeader mentorId="1" bookmark={d.isMarkOn} />
      </ScrollLayout.Section>
      <ScrollLayout.Section marginTop={0}>
        <MentorDetailProfileCard
          profileUrl={d.profileUrl}
          profileCareer={d.profileCareer}
          profileName={d.profileName}
          profileSchool={d.profileSchool}
        />
      </ScrollLayout.Section>
      <ScrollLayout.Section marginTop={32}>
        <MentorDetailProfileTag
          careerTag={d.careerTag}
          personalityTag={d.personalityTag}
        />
      </ScrollLayout.Section>
      <ScrollLayout.Section marginTop={70}>
        <MentorDetailProfileRatings
          mentoringNum={d.mentoringNum}
          portfolioNum={d.portfolioNum}
          satisfaction={d.satisfaction}
        />
      </ScrollLayout.Section>
      <ScrollLayout.Section marginTop={40} noMarginHorizontal={true}>
        <MentorDetailProfileIntroduce
          profileCompany={d.profileCompany}
          profileJob={d.profileJob}
          profileJobSubstring={d.profileJobSubstring}
        />
      </ScrollLayout.Section>
      <ScrollLayout.Section marginTop={56}>
        <MentorDetailStrengths strengths={d.profileStrengths} />
      </ScrollLayout.Section>
      <ScrollLayout.Section marginTop={56} noMarginHorizontal={true}>
        <MentorDetailTabContents />
      </ScrollLayout.Section>
    </ScrollLayout>
  );
}
