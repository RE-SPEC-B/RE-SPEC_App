import SvgIcon from "@components/svg/SvgIcon";
import React from "react";
import { useSize } from "@hooks/useSize";
import { Fonts } from "@styles/font";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { styles, retainedStyles } from "./Coupon.style";
import { dateCounting } from "@utils/dateCounting";
import { dateToString } from "@utils/dateToString";

interface ICouponDisableProps {
    title: string;          //쿠폰 이름
    description: string;    //쿠폰 설명
    endDate: Date;             //해당 쿠폰 만료 일자
  }

const CouponDisable = ({title, description, endDate}: ICouponDisableProps) => {
    const Font = Fonts();
    const componentSize = useSize(342);
    const contentSize = useSize(264);
    const svgWrapSize = useSize(78);
    const dDayCount = dateCounting(endDate);
    const stringDate = dateToString(endDate);

    return (
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
    );
};

export default CouponDisable;