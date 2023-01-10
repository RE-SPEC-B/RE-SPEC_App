import { Platform, StyleSheet } from "react-native";
import { EColor } from "@styles/color";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 126,
    width: 342,
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: EColor.GRAY_50,
    ...Platform.select({
        ios: {
            shadowColor: "rgba(0,0,0,0.1)",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            shadowOffset: {
                height: -1,
                width: 0,
            },
        },
        android: {
            elevation: 2,
        }
    })
  },
  svgWrap: {
    height: 126,
    width: 78,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  borderWrap: {
    height: 126,
    width: 264,
    ...Platform.select({
        ios: {
            overflow: 'hidden'
        },
    })
  },
  content: {
    height: 128,
    width: 264,
    paddingLeft: 24,
    justifyContent: "center",
    borderStyle: 'dotted',
    borderColor: EColor.GRAY_300,
    ...Platform.select({
        ios: {
            borderWidth: 1, 
            margin: -1,
            marginRight: 0,
        },
        android: {
            borderRightWidth: 1,
            flexDirection: "column",
        }
    })
  },
  descriptionText: {
    color: EColor.GRAY_600,
    fontWeight: '700',
    ...Platform.select({
        ios: {
            marginBottom: 8,
        },
    })
  },
  titleText: {
    color: EColor.GRAY_900,
    fontWeight: '400',
    ...Platform.select({
        ios: {
            marginBottom: 15,
        },
        android: {
            marginBottom: 5,
        }
    })
  },
  dateWrap : {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  dDayIcon: {
    paddingHorizontal:8,
    paddingVertical: 4,
    backgroundColor: EColor.GRAY_700,
    color: EColor.MINT_500,
    borderRadius: 4,
    overflow: 'hidden',
  },
  dateText: {
    color: EColor.GRAY_500,
    fontWeight: '500',
    marginLeft: 8
  }
});
  
  
const retainedStyles = StyleSheet.create({
  svgWrap: {
    height: 126,
    width: 78,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 24,
    color: EColor.GRAY_300,
  },
  svgBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent:'center',
    borderColor: EColor.GRAY_300,
    borderWidth: 1,
    marginBottom: 4
  },
  borderWrap: {
    height: 126,
    width: 264,
    ...Platform.select({
        ios: {
            overflow: 'hidden'
        },
    })
  },
  content: {
    height: 128,
    width: 264,
    paddingLeft: 24,
    justifyContent: "center",
    borderStyle: 'dotted',
    borderColor: EColor.GRAY_300,
    ...Platform.select({
        ios: {
            borderWidth: 1, 
            margin: -1,
            marginRight: 0,
        },
        android: {
            borderRightWidth: 1,
            flexDirection: "column",
        }
    })
  },
  descriptionText: {
    fontWeight: '700',
    color: EColor.GRAY_300,
    ...Platform.select({
        ios: {
            marginBottom: 8,
        },
    })
  },
  titleText: {
    fontWeight: '400',
    color: EColor.GRAY_300,
    ...Platform.select({
        ios: {
            marginBottom: 15,
        },
        android: {
            marginBottom: 5,
        }
    })
  },
  dateText: {
    color: EColor.GRAY_300,
    fontWeight: '500',
  }
})

export {styles, retainedStyles};