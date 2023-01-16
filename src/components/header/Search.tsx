import { EColor } from "@styles/color";
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

  const onBlurTextInput = () => {
    setSearchState(false);
  }

  return (
    <View>
        {searchState ? (
            <TextInput onBlur={onBlurTextInput} style={{...styles.searchBar, width: widthSize}}/>
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
      height: 46,
      borderWidth: 1,
      borderRadius: 26.5,
      borderColor: EColor.MINT_500,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 16,
    },
    svgStyle: {
        marginTop: 8
      }
  });
  