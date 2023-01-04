import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { format, addDays, addWeeks } from "date-fns";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { styles } from "./styles";

LocaleConfig.locales["kor"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "kor";

const DatePicker = () => {
  const nowDate = new Date();
  const minDate = format(addDays(nowDate, 1), "yyyy-MM-dd");
  const maxDate = format(addWeeks(nowDate, 3), "yyyy-MM-dd");
  const [selected, setSelected] = useState({ [minDate]: { selected: true } });

  const onDayPress = useCallback((day) => {
    let selectedDate = {};
    selectedDate[day.dateString] = { selected: true }
    setSelected(selectedDate);
  });

  return (
    <View>
      <Calendar
        markedDates={selected}
        style={styles.calendar}
        minDate={minDate}
        maxDate={maxDate}
        onDayPress={onDayPress}
        monthFormat={"yyyy. MM"}
        hideArrows={true}
        renderHeader={(date) => (
          <Text style={styles.customHeader}>{date.toString("yyyy. MM")}</Text>
        )}
        theme={{
          "stylesheet.calendar.header": {
            header: { ...styles.header },
            week: { ...styles.week },
            dayHeader: { ...styles.dayHeader },
          },
          "stylesheet.day.basic": {
            base: { ...styles.base },
            text: { ...styles.text },
            disabledText: { ...styles.disabledText },
            selected: { ...styles.selected },
          },
          "stylesheet.calendar.main": {
            container: { ...styles.calendarContainer },
          },
        }}
      />
      <Text style={styles.infoText}>
        *날짜 선택은 최대 3주 후까지 가능합니다
      </Text>
    </View>
  );
};

export default DatePicker;
