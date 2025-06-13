import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText title={true}>about page</ThemedText>
      <ThemedText>
        <Link style={styles.link} href={"/"}>
          Home Page
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  // className : container
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  title: {
    fontWeight: "700",
    fontSize: 20,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
