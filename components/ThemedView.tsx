import {
  SafeAreaView,
  StyleProp,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../constants/Colors";
import { viewProps } from "../types/Props.type";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, children, ...props }: viewProps) => {
  // thmed base styling
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  if (!safe) {
    return (
      <View style={[style, { backgroundColor: theme.background }]} {...props}>
        {children}
      </View>
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        style,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedView;
