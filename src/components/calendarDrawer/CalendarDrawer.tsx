import { View, Button } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CustomBackdrop from "./customBackdrop/CustomBackdrop";
import DatePicker from "./datePicker/DatePicker";
import TimeSelectButton from "../timeSelectButton/TimeSelectButton";
import { styles } from "./styles";

const CalendarDrawer = () => {
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
    <BottomSheetModalProvider>
      <View style={styles.view}>
        <Button onPress={handlePresentModalPress} title="테스트" />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={CustomBackdrop}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <DatePicker />
          </View>
        </BottomSheetModal>
        <TimeSelectButton label={"06 : 30"} selected={true} />
        <TimeSelectButton label={"06 : 30"} selected={false} />
      </View>
    </BottomSheetModalProvider>
  );
};

export default CalendarDrawer;
