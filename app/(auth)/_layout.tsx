import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { use } from "react";
import { Stack } from "expo-router";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { Colors } from "../../constants/Colors";
import useUser from "../../hooks/useUser";

const AuthLayout = () => {
  // color theme hook, get the data from app.json, userInterfaceStyle
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  const { user } = useUser();
  console.log(user);

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
