import SvgIcon from "@components/svg/SvgIcon";
import React, { useEffect, useState } from "react";
import { useSize } from "@hooks/useSize";
import { Fonts } from "@styles/font";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import { styles, retainedStyles } from "./Coupon.style";
import { dateCounting } from "@utils/dateCounting";
import { dateToString } from "@utils/dateToString";

interface ICouponProps {
    retained: boolean;      //해당 쿠폰 보유 여부
    title: string;          //쿠폰 이름
    description: string;    //쿠폰 설명
    endDate: Date;             //해당 쿠폰 만료 일자
  }

const Coupon = ({retained, title, description, endDate}: ICouponProps) => {
    const Font = Fonts();
    const componentSize = useSize(342);
    const contentSize = useSize(264);
    const svgWrapSize = useSize(78);
    const [retainedState, setRetainedState] = useState<boolean>(retained);
    const dDayCount = dateCounting(endDate);
    const stringDate = dateToString(endDate);

    useEffect(()=>{
    }, [retainedState]);

    const onPressGetCoupon = () => {
        setRetainedState(true);
    }

    if(retainedState){
        return(
        <View style={{...styles.container, width: componentSize.width}}>
          <View style={{...styles.borderWrap, width: contentSize.width}}>
              <View style={{...retainedStyles.content, width: contentSize.width}}>
                  <Text style={{...Font.body3, ...retainedStyles.descriptionText}}>{description}</Text>
                  <Text style={{...Font.title2, ...retainedStyles.titleText}}>{title}</Text>
                  <View style={{...Font.body4, ...styles.dateWrap}}>
                      <Text style={retainedStyles.dateText}>{stringDate}까지</Text>
                  </View>
              </View>
          </View>
          <View style={{...styles.svgWrap, width: svgWrapSize.width}}>
              <View style={retainedStyles.svgBox}>
                <SvgIcon name="downloadComplete"/>
              </View>
              <Text style={{...retainedStyles.descriptionText, width: 26}}>
                완료
              </Text>
          </View>
      </View>
        )
    }
    return (
      <View style={{...styles.container, width: componentSize.width}}>
          <View style={{...styles.borderWrap, width: contentSize.width}}>
              <View style={{...styles.content, width: contentSize.width}}>
                  <Text style={{...Font.body3, ...styles.descriptionText}}>{description}</Text>
                  <Text style={{...Font.title2, ...styles.titleText}}>{title}</Text>
                  <View style={{...Font.body4, ...styles.dateWrap}}>
                      <Text style={styles.dDayIcon}>D-{dDayCount}</Text>
                      <Text style={styles.dateText}>{stringDate}까지</Text>
                  </View>
              </View>
          </View>
          <TouchableOpacity 
            style={{...styles.svgWrap, width: svgWrapSize.width}}
            onPress={onPressGetCoupon}
          >
              <SvgIcon name="download"/>
          </TouchableOpacity>
      </View>
    );
};

export default Coupon;

