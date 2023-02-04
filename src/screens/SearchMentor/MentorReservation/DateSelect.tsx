import { View, Text } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import ScheduleInput from "@components/scheduleInput/ScheduleInput";
import { styles } from "./styles";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import SuccessIcon from "@components/successDotIcon/SuccessIcon";
import DatePicker from "@components/datePicker/DatePicker";
import CustomBackdrop from "@components/customBackdrop/CustomBackdrop";

const DateSelect = ({ navigation }) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["20%", "60%", "90%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={CustomBackdrop}
        onChange={handleSheetChanges}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <DatePicker />
        </View>
      </BottomSheetModal>
      <View style={styles.titleBox}>
        <Text style={styles.mainTitle}>일정을{"\n"}선택해주세요👇</Text>
        <Text style={styles.subTitle}>
          일정 3개를 선택하시면 멘토가 1개를 선택해{"\n"}멘토링 시간이 확정돼요!
        </Text>
      </View>
      <View style={styles.scheduleBox}>
        <View style={styles.scheduleIconBox}>
          <SuccessIcon success={true} />
          <View style={styles.scheduleIconLine} />
          <SuccessIcon success={false} />
          <View style={styles.scheduleIconLine} />
          <SuccessIcon success={false} />
        </View>
        <View style={styles.scheduleInputBox}>
          <ScheduleInput
            success={true}
            labelLeft={"12월 3일"}
            labelRight={"오후 6시"}
            onClick={() => navigation.navigate("TimeSelectNavigator")}
          />
          <ScheduleInput
            success={false}
            labelLeft={"일정을 선택해주세요"}
            labelRight={undefined}
            onClick={handlePresentModalPress}
          />
          <ScheduleInput
            success={false}
            labelLeft={"일정을 선택해주세요"}
            labelRight={undefined}
            onClick={handlePresentModalPress}
          />
        </View>
      </View>
    </>
  );
};

export default DateSelect;
