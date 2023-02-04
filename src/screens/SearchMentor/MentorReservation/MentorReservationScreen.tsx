import { SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import AppointmentHeader from "@components/header/AppointmentHeader";
import { styles } from "./styles";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import CustomModal from "@components/customModal/CustomModal";
import TimeSelect from "./TimeSelect";
import DateSelect from "./DateSelect";
import PortfolioInput from "./PortfolioInput";
import MentorQuestion from "./MentorQuestion";
import Payment from "./Payment";


const MentorReservationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.view}>
      <BottomSheetModalProvider>
        <CustomModal
          visible={modalVisible}
          label={`나가시겠습니까?${"\n"}입력하신 내용이 저장되지 않습니다.`}
          buttonLeftLabel="네"
          buttonRightLabel="아니오"
        />
        <AppointmentHeader />
        <View style={{ paddingHorizontal: 25 }}>
          {/* <TimeSelect /> */}
          <DateSelect navigation={navigation} />
          {/* <PortfolioInput /> */}
          {/* <MentorQuestion /> */}
        </View>
        {/* <Payment /> */}
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default MentorReservationScreen;
