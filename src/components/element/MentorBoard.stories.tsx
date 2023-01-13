import { storiesOf } from "@storybook/react-native";
import React from "react";
import MentorBoard from "./MentorBoard";

const data = {
    thumbnailImageURI: 'https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg',
    bookmark: false,
    mentorName: '도쿄규림',
    company: '네이버',
    duty: '서비스 기획, UX',
    period: '1~4년차',
    detail: '현직자가 알려주는 비전공자취업 이야기',
    mentorTag: ['전문적인','쾌활한']
}

storiesOf("MentorBoard", module)
  .add("MentorBoard", () => <MentorBoard 
                                thumbnailImageURI={data.thumbnailImageURI} 
                                bookmark={data.bookmark} 
                                mentorName={data.mentorName}
                                company={data.company}
                                duty={data.duty}
                                period={data.period}
                                detail={data.detail}
                                mentorTag={data.mentorTag}
                                />)
