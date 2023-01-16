import SvgIcon from "@components/svg/SvgIcon";
import { Fonts } from "@styles/font";
import React, {useState} from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import periodStarSVG from "@utils/periodStarSVG";
import Tag from "../tag/Tag";
import { styles } from "./MentorBoard.style";

interface IMentorBoardProps {
    thumbnailImageURI: string,
    bookmark: boolean,
    mentorName: string,
    company: string,
    duty: string,
    period: string,
    detail: string,
    mentorTag: string[]
}

const MentorBoard = (props: IMentorBoardProps) => {
  const fonts = Fonts();
  const {thumbnailImageURI, bookmark, mentorName, company, duty, period, detail, mentorTag} = props;
  const [bookmarkState, setBookmarkState] = useState<boolean>(bookmark)
  const bookmarkStateString = bookmarkState ? "markOn":  "markOffWhite";
  const starLevel = periodStarSVG(period);

  const onPressBookmark = () => {
    setBookmarkState(prev=> !prev);
  }

  const onPressMentorBoard = () => {
    console.log("Click Mentor: ", mentorName);
  }

  return (
    <TouchableOpacity onPress={onPressMentorBoard} activeOpacity={1} style={styles.container}>
      <View style={styles.thumbnailWrap}>
        <Image resizeMode="cover" 
                source={{uri: thumbnailImageURI}}
                style={styles.thumbnailImage}/>
        <TouchableOpacity onPress={onPressBookmark} style={{...styles.bookmarkIcon}}>
          <SvgIcon  name={bookmarkStateString} />
        </TouchableOpacity>
      </View>
      <Text style={{...styles.mentorName, ...fonts.title3}}>{mentorName}</Text>
      <View style={styles.TextWrap}>
        <Text style={fonts.body2}>{company}</Text>
        <View style={styles.dot}/>
        <Text style={fonts.body2}>{duty}</Text>
        <View style={styles.dot}/>
        <Text style={{...fonts.body2, marginRight: 8}}>{period}</Text>
        <SvgIcon name={starLevel}/>
      </View>
      <Text style={{...fonts.body3, ...styles.detailText}}>{detail}</Text>
      <View style={styles.TextWrap}>
        {mentorTag.map((e, idx)=>{
          return (
            <View key={e} style={{marginRight: 8}}>
              <Tag size="smallB" label={e} key={e}/>
            </View>
          )
        })}
      </View>
    </TouchableOpacity>
  );
};

export default MentorBoard;