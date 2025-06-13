import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  // color theme hook, get the data from app.json, userInterfaceStyle
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
          },

          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  size={24}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                  name={focused ? "book" : "book-outline"}
                />
              );
            },
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  size={24}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                  name={focused ? "add-circle" : "add-circle-outline"}
                />
              );
            },
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  size={24}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                  name={focused ? "person" : "person-outline"}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
