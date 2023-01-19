export type FilterType = "sequence" | "cureer" | "search";

export type SequenceType = "popularity" | "review" | "recent";
export const sequences = [
  { id: "popularity" as SequenceType, label: "인기순" },
  { id: "review" as SequenceType, label: "후기순" },
  { id: "recent" as SequenceType, label: "최신순" },
];

export type CureerType =
  | "graduateSchool"
  | "development"
  | "itPlanning"
  | "design"
  | "sales"
  | "hr"
  | "consulting"
  | "retail";

export const cureers = [
  {
    id: "graduateSchool" as CureerType,
    label: "대학원",
    options: [
      { id: "domesticMba", label: "국내 MBA" },
      { id: "overseasMba", label: "해외 MBA" },
      { id: "domesticDoctorate", label: "국내 석박사" },
    ],
  },
  {
    id: "development" as CureerType,
    label: "개발",
    options: [
      { id: "frontEngineer", label: "프론트엔드" },
      { id: "backEngineer", label: "백엔드" },
      { id: "infra", label: "인프라" },
    ],
  },
  {
    id: "itPlanning" as CureerType,
    label: "IT 기획",
    options: [{ id: "contents", label: "컨텐츠 기획" }],
  },
  {
    id: "design" as CureerType,
    label: "디자인",
    options: [
      { id: "uxui", label: "UX/UI" },
      { id: "illust", label: "일러스트" },
      { id: "graphic", label: "그래픽" },
    ],
  },
  {
    id: "sales" as CureerType,
    label: "영업",
    options: [{ id: "business", label: "사업" }],
  },
  {
    id: "hr" as CureerType,
    label: "HR",
    options: [{ id: "leadership", label: "리더쉽" }],
  },
  {
    id: "consulting" as CureerType,
    label: "컨설팅",
    options: [{ id: "consultant", label: "컨설턴트" }],
  },
  {
    id: "retail" as CureerType,
    label: "리테일",
    options: [{ id: "md", label: "MD" }],
  },
  //   {
  //     id: "specialist",
  //     label: "스페셜리스트",
  //     options: [
  //       { id: "", label: "" },
  //       { id: "", label: "" },
  //       { id: "", label: "" },
  //     ],
  //   },
];
