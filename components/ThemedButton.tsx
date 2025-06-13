import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../constants/Colors";
import { buttonProps, Props } from "../types/Props.type";

const ThemedButton = ({ style, children, onPress, ...props }: buttonProps) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
