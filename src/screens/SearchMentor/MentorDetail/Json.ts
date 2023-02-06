export const data = {
  isMarkOn: true,
  profileUrl:
    "https://cdn.pixabay.com/photo/2022/12/28/21/10/night-7683839_640.jpg",
  profileName: "도쿄규림",
  profileSchool: "홍익대학교",
  profileCareer: 3,
  careerTag: ["#1~4년차"],
  personalityTag: ["전문적인", "쾌활한"],
  mentoringNum: 12,
  portfolioNum: 8,
  satisfaction: 4.6,
  profileCompany: "네이버",
  profileJob: "서비스기획",
  profileJobSubstring: "네이버 현직자가 알려주는 비전공자 취업이야기",
  profileStrengths: [
    "대기업 이직 포트폴리오 피드백",
    "커리어 방향성에 대한 상세한 조언",
  ],
  introduction: {
    mentorTitle: "눈에 띄는 스펙 없이도 눈에 띄는 코칭이 가능해요!",
    mentorDetail:
      "전 주변 지인들의 신입/ 경력직 이직을 모두 성공시킨 경험이 있습니다. 서비스 기획자를 꿈꾸는 많은 분들께서, 취업과 커리어에 대한 이런 저런 고민도 함께 가지고 있을 것 이라는 생각이 듭니다. 그렇기 때문에 서비스 기획자란 무엇인지에 대해서 뿐만이 아닌, 가지고 계신 커리어 고민에 도움이 될만한 저의 경험을 나누고자 합니다.",
    mentorVideo: "",
    mentorCareer: [
      {
        startDate: "2020.03",
        endDate: undefined,
        company: "NAVER",
        job: "네이버 서비스 / 기획",
      },
      {
        startDate: "2018.03",
        endDate: "2020.02",
        company: "LG",
        job: "LG 서비스 / 상품 기획",
      },
    ],
    mentorPortfolio: [],
    mentorUrl: "https://chaey1225.github.io/",
  },
  review: {
    reviewNum: 12,
    reviewAverage: 4.6,
    reviewPreview: [
      {
        title: "친절하게 설명해 주셨어요.",
        num: 10,
      },
      {
        title: "명확한 피드백을 주셨어요.",
        num: 2,
      },
    ],
    reviewList: [
      {
        title: "감자",
        createdAt: "22.11.01",
        time: "40",
        description:
          "현직자와 이야기 나눌 수 있는 기회가 잘 없었는데 30분 동안재미있고 뜻깊은 대화를 할 수 있어 좋은 기회였습니다! 감사합니다 :)",
      },
      {
        title: "감자",
        createdAt: "22.11.01",
        time: "40",
        description:
          "현직자와 이야기 나눌 수 있는 기회가 잘 없었는데 30분 동안재미있고 뜻깊은 대화를 할 수 있어 좋은 기회였습니다! 감사합니다 :)",
      },
    ],
  },
};

export const data1 = {
  message: "Get mentor info success.",
  data: [
    {
      id: 3,
      username: "RESPEC003",
      profile:
        "https://sonb-test-bucket.s3.ap-northeast-2.amazonaws.com/1691669898025364.png",
      Career: {
        company: "네이버",
        enum: "career_level_2",
      },
      Characteristics: [
        {
          enum: "characteristic_num_3",
        },
        {
          enum: "characteristic_num_6",
        },
      ],
      Jobs: [
        {
          enum: "job_num_3",
        },
      ],
      Mentorinfo: {
        introduction:
          "눈에 띄는 스펙없이도 눈에 띄는 코칭이 가능해요! 전 주변 지인들의...",
        mentoring: 4,
        correcting: 8,
        satisfaction: 3.2,
        video:
          "https://sonb-test-bucket.s3.ap-northeast-2.amazonaws.com/9191674380674747.mp4",
        title: "네이버 현직자가 알려주는 비전공자 취업이야기",
        Portfolio: {
          url: "https://~",
          announcement:
            "신입이나 커리어 전환하시려는 분들은 현재 나의 결과물과 기업을 매칭해서...",
          Portfoliopreviews: [
            {
              preview: "사진주소1",
            },
            {
              preview: "사진주소2",
            },
            {
              preview: "사진주소3",
            },
          ],
          Portfoliorecommendations: [
            {
              recommendation: "추천1",
            },
          ],
          Portfolioprogresses: [
            {
              progress: "과정1",
            },
            {
              progress: "과정2",
            },
          ],
        },
        Mentorcareers: [
          {
            companyname: "LG",
            company: "LG 서비스",
            job: "상품기획",
            start: "2013-04-00",
            end: "2014-05-00",
          },
          {
            companyname: "NAVER",
            company: "네이버 서비스",
            job: "사업기획",
            start: "2015-04-00",
            end: "2016-05-00",
          },
        ],
        Mentorstrengths: [
          {
            strength: "대기업 이직 포트폴리오 피드백",
          },
          {
            strength: "커리어 방향성에 대한 상세한 조언",
          },
        ],
      },
    },
    {
      reviews: 8,
    },
  ],
};
