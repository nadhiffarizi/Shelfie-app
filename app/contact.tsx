import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const Contact = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText title={true}> Contact Page </ThemedText>
      <ThemedText>
        <Link style={styles.link} href={"/"}>
          Home Page
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  // className : container
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
