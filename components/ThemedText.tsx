import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { Children } from "react";
import { textProps } from "../types/Props.type";
import { Colors } from "../constants/Colors";

const ThemedText = ({
  style,
  children,
  title = false,
  ...props
}: textProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;
  const colorText = title === false ? theme.text : theme.title;
  const textSize = title === false ? 20 : 30;
  const textWeight = title === false ? "500" : "700";
  return (
    <Text
      style={[
        style,
        { color: colorText, fontSize: textSize, fontWeight: textWeight },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemedText;

const styles = StyleSheet.create({});
