import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import CustomBackdrop from "./CustomBackdrop";

const CalendarDrawer = () => {
	const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["10%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.view}>
      <Text>LoginScreen</Text>
			<BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
				backdropComponent={CustomBackdrop}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
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
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CalendarDrawer;
