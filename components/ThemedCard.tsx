import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { viewProps } from "../types/Props.type";
import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, children, ...props }: viewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[style, styles.card, { backgroundColor: theme.uiBackground }]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
