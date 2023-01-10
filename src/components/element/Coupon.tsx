import React, { useEffect, useState } from "react";
import CouponAvailable from "./CouponAvailable";
import CouponUsed from "./CouponUsed";

interface ICouponProps {
    retained: boolean;      //해당 쿠폰 보유 여부
    title: string;          //쿠폰 이름
    description: string;    //쿠폰 설명
    endDate: Date;             //해당 쿠폰 만료 일자
  }

const Coupon = ({retained, title, description, endDate}: ICouponProps) => {
    const [retainedState, setRetainedState] = useState<boolean>(retained);

    useEffect(()=>{
    }, [retainedState]);

    const onPressGetCoupon = () => {
        setRetainedState(true);
    }

    if(retainedState){
        return(
          <CouponUsed title={title} endDate={endDate} description={description} />
        )
    }
    return (
      <CouponAvailable title={title} endDate={endDate} description={description} onPressGetCoupon={onPressGetCoupon}/>
    );
};

export default Coupon;

