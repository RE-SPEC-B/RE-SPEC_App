import SvgIcon from "@components/svg/SvgIcon";
import { Fonts } from "@styles/font";
import { EColor } from "@styles/color";
import {
  StyleSheet,
  Dimensions
} from "react-native";

const thumbnailImageWidth = Dimensions.get('window').width - 48;


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingLeft: 24,
    paddingRight: 24,
    marginVertical: 16,
  },
  thumbnailWrap: {
    height: 256,
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center',
  },
  thumbnailImage: {
    height: 256,
    width: thumbnailImageWidth,
    backgroundColor: 'skyblue',
    borderRadius: 16
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 20,
    right: 21,
    color: 'white'
  },
  mentorName: {
    marginTop: 24,
  },
  TextWrap: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 16,
  },
  dot: {
    width: 2,
    height:2,
    borderRadius: 100,
    backgroundColor: EColor.GRAY_400,
    marginHorizontal: 8,
  },
  detailText: {
    marginTop: 12,
    color: EColor.GRAY_600
  }
});

export {styles};