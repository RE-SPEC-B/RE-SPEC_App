import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 126,
    width: 342,
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
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
    borderColor: '#EEEEEE',
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
    color: '#5A6166',
    fontWeight: '700',
    ...Platform.select({
        ios: {
            marginBottom: 8,
        },
    })
  },
  titleText: {
    color: '#000000',
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
    backgroundColor: '#374553',
    color: '#00DFEB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  dateText: {
    color: '#999FA4',
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
    color: '#EEEEEE',
  },
  svgBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent:'center',
    borderColor: '#EEEEEE',
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
    borderColor: '#EEEEEE',
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
    color: '#EEEEEE',
    ...Platform.select({
        ios: {
            marginBottom: 8,
        },
    })
  },
  titleText: {
    fontWeight: '400',
    color: '#EEEEEE',
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
    color: '#EEEEEE',
    fontWeight: '500',
  }
})

export {styles, retainedStyles};