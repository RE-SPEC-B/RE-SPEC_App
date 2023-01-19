import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "@components/header/Header";
import { styles } from "./styles";
import SvgIcon from "@components/svg/SvgIcon";
import Tag from "@components/tag/Tag";
import { Fonts } from "@styles/font";
import MentorBoard from "@components/element/MentorBoard";
import Chip from "@components/chip/Chip";
import {
  FilterType,
  SequenceType,
  sequences,
  cureers,
} from "@defines/mentorFilter";
import { CureerType } from "src/defines/mentorFilter";

const MentorMainScreen = ({ navigations }) => {
  const fonts = Fonts();

  const [filterParams, setFilterParams] = useState<{
    type: FilterType;
    visible: boolean;
  }>({
    type: null,
    visible: false,
  });

  const [sequenceValue, setSequenceValue] =
    useState<SequenceType>("popularity");

  const [cureerValue, setCureerValue] = useState<CureerType>("graduateSchool");
  const [cureerOptions, setCureerOptions] = useState(
    cureers.filter((c) => c.id === cureerValue)[0].options,
  );
  console.log(cureerOptions);
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header />
        {filterParams.type === "sequence" && filterParams.visible === true && (
          <View style={styles.filterSequenceView}>
            {sequences.map((value) => {
              const sequenceId = value.id as SequenceType;

              const onClick = () => {
                setSequenceValue(sequenceId);
              };
              return (
                <Chip
                  type="filter"
                  label={value.label}
                  active={sequenceValue === sequenceId}
                  onClick={onClick}
                />
              );
            })}
          </View>
        )}
        {filterParams.type === "cureer" && filterParams.visible === true && (
          <View style={styles.filterCureerView}>
            <View style={styles.filterCureerKeyView}>
              {cureers.map((value) => {
                const cureerId = value.id as CureerType;
                const activeStyles =
                  cureerId === cureerValue
                    ? { ...styles.filterCureerFontActive }
                    : {};
                const onClick = () => {
                  setCureerValue(cureerId);
                  setCureerOptions(value.options);
                };
                return (
                  <Text
                    style={{ ...styles.filterCureerFont, ...activeStyles }}
                    onPress={onClick}
                  >
                    {value.label}
                  </Text>
                );
              })}
            </View>
            <View style={styles.filterCureerOptionView}>
              {cureerOptions.map((value) => {
                return (
                  <View style={styles.filterCureerOptionBox}>
                    <View style={styles.dot} />
                    <Text style={styles.filterCureerOptionFont}>
                      {value.label}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
        <TouchableOpacity
          style={styles.dutyPositionWrap}
          onPress={() =>
            setFilterParams({
              type: "cureer",
              visible: filterParams.type === "cureer" && !filterParams.visible,
            })
          }
        >
          <SvgIcon name="add" />
          <View style={styles.dutyPositionSpeechBubble} />
          <View style={styles.dutyPositionText}>
            <Text style={{ ...fonts.body5, ...styles.dutyPositionTextColor }}>
              직무에 맞는 포지션을 찾아보세요!
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.filterWrap}>
          <View style={{ marginRight: 8 }}>
            <Tag svg="filter" />
          </View>
          <Tag emoji="🙌" label="동문보기" />
        </View>
        <View style={styles.infoWrap}>
          <Text style={fonts.body1}>전체({data.length.toLocaleString()})</Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() =>
              setFilterParams({
                type: "sequence",
                visible:
                  filterParams.type === "sequence" && !filterParams.visible,
              })
            }
          >
            <Text
              style={{ ...fonts.body1, fontWeight: "400", marginRight: 10 }}
            >
              인기순
            </Text>
            <SvgIcon name="dropdownBlack" />
          </TouchableOpacity>
        </View>
        {data.map((data, idx) => {
          return (
            <MentorBoard
              key={idx}
              thumbnailImageURI={data.thumbnailImageURI}
              bookmark={data.bookmark}
              mentorName={data.mentorName}
              company={data.company}
              duty={data.duty}
              period={data.period}
              detail={data.detail}
              mentorTag={data.mentorTag}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MentorMainScreen;

const data = [
  {
    thumbnailImageURI:
      "https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg",
    bookmark: false,
    mentorName: "도쿄규림",
    company: "네이버",
    duty: "서비스 기획, UX",
    period: "1~4년차",
    detail: "현직자가 알려주는 비전공자취업 이야기",
    mentorTag: ["전문적인", "쾌활한"],
  },
  {
    thumbnailImageURI:
      "https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg",
    bookmark: false,
    mentorName: "도쿄규림",
    company: "네이버",
    duty: "서비스 기획, UX",
    period: "1~4년차",
    detail: "현직자가 알려주는 비전공자취업 이야기",
    mentorTag: ["전문적인", "쾌활한"],
  },
  {
    thumbnailImageURI:
      "https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg",
    bookmark: false,
    mentorName: "도쿄규림",
    company: "네이버",
    duty: "서비스 기획, UX",
    period: "1~4년차",
    detail: "현직자가 알려주는 비전공자취업 이야기",
    mentorTag: ["전문적인", "쾌활한"],
  },
  {
    thumbnailImageURI:
      "https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg",
    bookmark: false,
    mentorName: "도쿄규림",
    company: "네이버",
    duty: "서비스 기획, UX",
    period: "1~4년차",
    detail: "현직자가 알려주는 비전공자취업 이야기",
    mentorTag: ["전문적인", "쾌활한"],
  },
];
