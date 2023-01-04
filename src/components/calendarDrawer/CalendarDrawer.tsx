import { View, Text, StyleSheet, Button } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CustomBackdrop from "./CustomBackdrop";
import { Fonts } from "@styles/font";
import DatePicker from "./DatePicker";

const CalendarDrawer = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["20%", "60%"], []);

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
        <Button onPress={handlePresentModalPress} title="Present Modal" />
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
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  modalDateTitle: {
    color: "black",
    ...Fonts().body4,
    fontSize: 20,
		marginTop: 54,
  },
});

export default CalendarDrawer;
