import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { Props } from "../types/Props.type";

const ThemedLogo = ({ style, children, ...props }: Props) => {
  // thmed base styling
  const colorScheme = useColorScheme();
  const srcLogo =
    colorScheme === "light"
      ? require("../assets/image/logo_light.png")
      : require("../assets/image/logo_dark.png");
  return <Image source={srcLogo} style={[style]} {...props} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({});
