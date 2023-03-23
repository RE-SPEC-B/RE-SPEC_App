import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React, { useCallback } from "react";
import Header from "@components/header/Header";
import { styles } from "./MentorMainScreen.style";
import SvgIcon from "@components/svg/SvgIcon";
import { Fonts } from "@styles/font";
import MentorBoard from "@components/element/MentorBoard";
import SmallTab from "@components/tab/SmallTab";

const data = [{
  thumbnailImageURI: 'https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg',
  bookmark: false,
  mentorName: '도쿄규림',
  company: '네이버',
  duty: '서비스 기획, UX',
  period: '1~4년차',
  detail: '현직자가 알려주는 비전공자취업 이야기',
  mentorTag: ['전문적인','쾌활한']
},
{
  thumbnailImageURI: 'https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg',
  bookmark: false,
  mentorName: '도쿄규림',
  company: '네이버',
  duty: '서비스 기획, UX',
  period: '1~4년차',
  detail: '현직자가 알려주는 비전공자취업 이야기',
  mentorTag: ['전문적인','쾌활한']
},
{
  thumbnailImageURI: 'https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg',
  bookmark: false,
  mentorName: '도쿄규림',
  company: '네이버',
  duty: '서비스 기획, UX',
  period: '1~4년차',
  detail: '현직자가 알려주는 비전공자취업 이야기',
  mentorTag: ['전문적인','쾌활한']
},
{
  thumbnailImageURI: 'https://cdn.pixabay.com/photo/2016/11/23/13/40/iphone-1852901__480.jpg',
  bookmark: false,
  mentorName: '도쿄규림',
  company: '네이버',
  duty: '서비스 기획, UX',
  period: '1~4년차',
  detail: '현직자가 알려주는 비전공자취업 이야기',
  mentorTag: ['전문적인','쾌활한']
}]

const MentorMainScreen = ({ navigations }) => {
  const fonts = Fonts();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header/>
        <TouchableOpacity style={styles.dutyPositionWrap}>
          <SvgIcon name="add"/>
          <View style={styles.dutyPositionSpeechBubble}/>
          <View style={styles.dutyPositionText}>
            <Text style={{...fonts.body5, ...styles.dutyPositionTextColor}}>직무에 맞는 포지션을 찾아보세요!</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.filterWrap}>
          <View style={{marginRight: 8}}>
            <SmallTab svg="filter" />
          </View>
          <SmallTab emoji="🙌" label="동문보기" />
        </View>
        <View style={styles.infoWrap}>
          <Text style={fonts.body1}>전체({data.length.toLocaleString()})</Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{...fonts.body1, fontWeight: '400', marginRight:10}} >인기순</Text>
            <SvgIcon name="dropdownBlack" />
          </TouchableOpacity>
        </View>
        {
          data.map((data, idx)=>{
            
            return(<MentorBoard 
              key={idx}
              thumbnailImageURI={data.thumbnailImageURI} 
              bookmark={data.bookmark} 
              mentorName={data.mentorName}
              company={data.company}
              duty={data.duty}
              period={data.period}
              detail={data.detail}
              mentorTag={data.mentorTag}
            />)
          })
        }
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default MentorMainScreen;
