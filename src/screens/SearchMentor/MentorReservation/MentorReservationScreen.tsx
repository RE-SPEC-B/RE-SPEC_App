import { SafeAreaView, View, Text, Modal } from "react-native";
import React, { useState } from "react";
import AppointmentHeader from "@components/header/AppointmentHeader";
import { styles } from "./styles";
import ScheduleInput from "@components/scheduleInput/ScheduleInput";
import SuccessIcon from "./SuccessIcon";

const MentorReservationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.view}>
      {/* 커스텀 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>나가시겠습니까{"\n"}입력하신 내용이 저장되지 않습니다.</Text>
            <View style={styles.modalButtonBox}>
              <Text>버튼</Text>
              <Text>버튼</Text>
            </View>
          </View>
        </View>
      </Modal>
      {/* 헤더 */}
      <AppointmentHeader />
      {/* 뷰 */}
      <View style={{ paddingHorizontal: 25 }}>
        {/* 시간 선택 */}
        {/* <View style={styles.titleBox}>
          <Text style={styles.mainTitle}>
            멘토링{"\n"}시간을 선택해주세요👇
          </Text>
          <Text style={styles.subTitle}>
            멘토와 간단한 인사와 질문 3개 정도를 할 수 있어요!
          </Text>
        </View>
        <View style={styles.timeSelectBox}>
          <Text>버튼</Text>
          <Text>버튼</Text>
          <Text>버튼</Text>
        </View> */}
        {/* 날짜 선택 */}
        {/* <View style={styles.titleBox}>
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
            />
            <ScheduleInput
              success={false}
              labelLeft={"일정을 선택해주세요"}
              labelRight={undefined}
            />
            <ScheduleInput
              success={false}
              labelLeft={"일정을 선택해주세요"}
              labelRight={undefined}
            />
          </View>
        </View> */}
        {/* 포트롤리오 링크 */}
        {/* <View style={styles.titleBox}>
          <Text style={styles.mainTitle}>
            포트폴리오{"\n"}링크를 공유해주세요👇
          </Text>
          <Text style={styles.subTitle}>
            PDF 형대로 제출을 원하시는 경우, 구글드라이브{"\n"}업로드하여 해당 링크를 전달해 주세요.
          </Text>
        </View>
        <Text>링크 인풋 자리</Text> */}
        {/* 멘토 질문 */}
        {/* <View style={styles.titleBox}>
          <Text style={styles.mainTitle}>
            멘토에게{"\n"}궁금한 것을 적어주세요👇
          </Text>
        </View>
        <Text>멀티라인 텍스트인풋자리</Text> */}
      </View>
      <View style={styles.payBox}>
        <View style={styles.payTextBox}>
          <Text style={styles.payTextSub}>결제금액</Text>
          <Text style={styles.payTextMain}>40,000 원</Text>
        </View>
        <View style={styles.payButtonBox}>
          <Text>장바구니버튼</Text>
          <Text>결제하기버튼</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MentorReservationScreen;
