import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import Header from "@components/header/Header";
import { styles } from "./styles";
import SvgIcon from "@components/svg/SvgIcon";
import Tag from "@components/tag/Tag";
import { Fonts } from "@styles/font";
import MentorBoard from "@components/element/MentorBoard";
import { FilterType, SequenceType } from "@defines/mentorFilter";
import SequenceView from "./filterComponents/SequenceView";
import CureerView from "./filterComponents/CureerView";
import SearchView from "./filterComponents/SearchView";
import CustomBackdrop from "@components/customBackdrop/CustomBackdrop";

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

  // TODO: cureer option에 관한 키 값은 나중에 데이터 받으면 재 수정 필요 (from mentorFilter.ts)
  const [cureerOptionValues, setCureerOptionVlues] = useState([]);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["20%", "60%", "90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={CustomBackdrop}
          onChange={handleSheetChanges}
        >
          {filterParams.type === "sequence" &&
            filterParams.visible === true && (
              <SequenceView
                sequenceValue={sequenceValue}
                setSequenceValue={setSequenceValue}
              />
            )}
        </BottomSheetModal>
        <ScrollView style={styles.container}>
          <Header />

          {filterParams.type === "cureer" && filterParams.visible === true && (
            <CureerView
              cureerOptionValues={cureerOptionValues}
              setCureerOptionVlues={setCureerOptionVlues}
            />
          )}
          {filterParams.type === "search" && filterParams.visible === true && (
            <SearchView />
          )}
          <TouchableOpacity
            style={styles.dutyPositionWrap}
            onPress={() =>
              setFilterParams({
                type: "cureer",
                visible:
                  filterParams.type === "cureer" && !filterParams.visible,
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
              <Tag
                svg="filter"
                onChange={() =>
                  setFilterParams({
                    type: "search",
                    visible:
                      filterParams.type === "search" && !filterParams.visible,
                  })
                }
              />
            </View>
            <Tag emoji="🙌" label="동문보기" />
          </View>
          <View style={styles.infoWrap}>
            <Text style={fonts.body1}>
              전체({data.length.toLocaleString()})
            </Text>
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
    </BottomSheetModalProvider>
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
