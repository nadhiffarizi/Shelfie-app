import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedCard from "../components/ThemedCard";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";

const Home = () => {
  // color theme hook, get the data from app.json, userInterfaceStyle
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedLogo />
      <ThemedText title={true}>The number 1</ThemedText>
      <ThemedText>Reading list app</ThemedText>

      <ThemedCard>
        <ThemedText>This is a Card</ThemedText>
      </ThemedCard>

      <Spacer />

      <ThemedText>
        <Link style={styles.link} href={"/login"}>
          Login
        </Link>
      </ThemedText>
      <ThemedText>
        <Link style={styles.link} href={"/register"}>
          Register
        </Link>
      </ThemedText>
      <ThemedText>
        <Link style={styles.link} href={"/profile"}>
          Profile
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default Home;

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
