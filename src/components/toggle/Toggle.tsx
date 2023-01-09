import { EColor } from "@styles/color";
import React from "react";
import { TouchableOpacity, Switch, StyleSheet } from "react-native";

interface IToggle {
  defaultValue?: boolean;
  disabled?: boolean;
  // TODO: color type
  onToggleColor?: string;
  onChange?: () => void;
}

const styles = StyleSheet.create({
  toggle: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
});

const Toggle = (props: IToggle) => {
  const {
    defaultValue = false,
    disabled = false,
    onChange = () => console.log("toggle!"),
    onToggleColor = EColor.MINT_500,
  } = props;
  return (
    <TouchableOpacity>
      <Switch
        style={styles.toggle}
        disabled={disabled}
        value={defaultValue}
        onChange={onChange}
        trackColor={{ true: onToggleColor }}
        // ios_backgroundColor={onToggleColor}
      ></Switch>
    </TouchableOpacity>
  );
};

export default Toggle;
