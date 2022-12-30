import {EBrandColor } from "@styles/color";
import SvgIcon from "@components/svg/SvgIcon";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useSize } from "@hooks/useSize";

const Search = () => {
  const [searchState, setSearchState] = useState<Boolean>(false);
  const widthSize = useSize(250).width;
  
  const onPressSearchButton = () => {
    setSearchState((prev)=>!prev)
  }

  return (
    <View>
        {searchState ? (
            <TextInput style={{...styles.searchBar, width: widthSize}}/>
        ):(
        <TouchableOpacity
                style={styles.svgStyle}
                onPress={onPressSearchButton}
            >
                <SvgIcon name="search"/>
        </TouchableOpacity>
        )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
    searchBar: {
      flexDirection: "row",
      alignContent: "center",
      height: 40,
      borderWidth: 1,
      borderRadius: 26.5,
      borderColor: EBrandColor.MAIN_TEXT,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 8,
    },
    svgStyle: {
        marginTop: 8
      }
  });
  