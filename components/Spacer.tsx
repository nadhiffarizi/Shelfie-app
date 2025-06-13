import { DimensionValue, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Props } from "../types/Props.type";

const Spacer = ({
  width = "100%",
  height = 40,
}: {
  width?: DimensionValue;
  height?: DimensionValue;
}) => {
  return <View style={{ width: width, height: height }} />;
};

export default Spacer;

const styles = StyleSheet.create({});
