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
import Layout from "@components/layout";

export default function MentorDetail() {
  // api hook 통해 데이터 호출.
  // const data = useApi(mentorDetail);

  return (
    <ScrollView>
      <RecommendHeader mentorId="1" bookmark={d.isMarkOn} />
      <MentorDetailProfileCard
        profileUrl={d.profileUrl}
        profileCareer={d.profileCareer}
        profileName={d.profileName}
        profileSchool={d.profileSchool}
      />
      <MentorDetailProfileTag
        careerTag={d.careerTag}
        personalityTag={d.personalityTag}
      />
      <MentorDetailProfileRatings
        mentoringNum={d.mentoringNum}
        portfolioNum={d.portfolioNum}
        satisfaction={d.satisfaction}
      />
      <MentorDetailProfileIntroduce
        profileCompany={d.profileCompany}
        profileJob={d.profileJob}
        profileJobSubstring={d.profileJobSubstring}
      />
      <MentorDetailStrengths strengths={d.profileStrengths} />
    </ScrollView>
  );
}
