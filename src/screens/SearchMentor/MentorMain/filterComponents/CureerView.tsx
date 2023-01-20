import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { CureerType, cureers } from "@defines/mentorFilter";
import Button from "@components/button/Button";
import { EColor } from "@styles/color";
import { Fonts } from "@styles/font";
import { useState } from "react";
import Tag from "@components/tag/Tag";

const CureerView = ({ cureerOptionValues, setCureerOptionVlues }) => {
  const { width, height } = useWindowDimensions();

  const [cureerValue, setCureerValue] = useState<CureerType>("graduateSchool");
  const [cureerOptions, setCureerOptions] = useState(
    cureers.filter((c) => c.id === cureerValue)[0].options,
  );

  return (
    <>
      <View style={styles.filterCureerView}>
        <View style={styles.filterCureerKeyView}>
          {cureers.map((value) => {
            const cureerId = value.id as CureerType;
            const activeStyles =
              cureerId === cureerValue
                ? { ...styles.filterCureerFontActive }
                : {};
            const onClick = () => {
              setCureerValue(cureerId);
              setCureerOptions(value.options);
            };
            return (
              <Text
                style={{ ...styles.filterCureerFont, ...activeStyles }}
                onPress={onClick}
                key={cureerId}
              >
                {value.label}
              </Text>
            );
          })}
        </View>
        <View style={styles.filterCureerOptionView}>
          {cureerOptions.map((value) => {
            const active = cureerOptionValues.includes(value);
            const activeStyles = active
              ? {
                  dot: styles.dotActive,
                  font: styles.filterCureerOptionFontActive,
                }
              : { dot: {}, font: {} };
            return (
              <View
                style={styles.filterCureerOptionBox}
                key={value.id}
                onTouchEnd={() => {
                  if (cureerOptionValues.length >= 3) return;
                  if (active) return;
                  setCureerOptionVlues([...cureerOptionValues, value]);
                }}
              >
                <View style={{ ...styles.dot, ...activeStyles.dot }} />
                <Text
                  style={{
                    ...styles.filterCureerOptionFont,
                    ...activeStyles.font,
                  }}
                >
                  {value.label}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.filterCureerBottomView}>
        <View style={{ flexDirection: "row", marginBottom: 22 }}>
          {cureerOptionValues.length < 1 ? (
            <View>
              <Text
                style={{
                  ...Fonts().body5,
                  color: EColor.GRAY_600,
                }}
              >
                최대 3개까지 선택가능합니다.
              </Text>
            </View>
          ) : (
            cureerOptionValues.map((value) => {
              return (
                <View key={value.id} style={{ marginRight: 8 }}>
                  <Tag label={value.label} size="big" />
                </View>
              );
            })
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: (width - 48) / 3 }}>
            <Button
              label={"초기화"}
              type={"tertiary"}
              onClick={() => setCureerOptionVlues([])}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Button label={"검색"} type={"primary"} />
          </View>
        </View>
      </View>
    </>
  );
};

export default CureerView;

const styles = StyleSheet.create({
  filterCureerView: {
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterCureerKeyView: {
    flexDirection: "column",
    minWidth: 150,
  },
  filterCureerFont: {
    ...Fonts().title4,
    color: EColor.GRAY_400,
    marginBottom: 32,
  },
  filterCureerFontActive: {
    ...Fonts().title4,
    color: EColor.GRAY_900,
    marginBottom: 32,
  },
  filterCureerOptionView: {
    minWidth: 192,
    flexDirection: "column",
    backgroundColor: EColor.GRAY_100,
    padding: 24,
    borderRadius: 8,
  },
  filterCureerOptionBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  filterCureerOptionFont: {
    ...Fonts().title6,
    color: EColor.GRAY_500,
    marginLeft: 8,
  },
  filterCureerOptionFontActive: {
    ...Fonts().title4,
    color: EColor.GRAY_900,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 16,
    backgroundColor: EColor.GRAY_400,
  },
  dotActive: {
    backgroundColor: EColor.MINT_500,
  },
  filterCureerBottomView: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginTop: 32,
    backgroundColor: EColor.GRAY_50,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowRadius: 24,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
});
