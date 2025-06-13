import {
  TextInput,
  useColorScheme,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Props, textInputProps } from "../types/Props.type";
import { Colors } from "../constants/Colors";

export const ThemedTextInput = ({
  style,
  children,
  placeholder,
  keyBoardType,
  secureTextEntry,
  onchangeText,
  value,
}: textInputProps) => {
  // thmed base styling
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;
  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      placeholder={placeholder}
      keyboardType={keyBoardType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onchangeText}
    >
      {children}
    </TextInput>
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({});
