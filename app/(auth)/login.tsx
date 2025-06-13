import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { Link } from "expo-router";
import useUser from "../../hooks/useUser";

const Login = () => {
  // global state
  const { user, login } = useUser();

  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true}>Login to Your Account</ThemedText>

        <Spacer height={20} />
        <ThemedTextInput
          style={{ width: "80%" }}
          placeholder="Email"
          keyBoardType="email-address"
          onchangeText={setEmail}
          value={email}
        />
        <Spacer height={5} />
        <ThemedTextInput
          style={{ width: "80%" }}
          placeholder="Password"
          onchangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Spacer height={30} />
        <ThemedButton onPress={async () => handleSubmit()}>
          <Text style={{ color: "#f2f2f2", fontSize: 20, fontWeight: "600" }}>
            Login
          </Text>
        </ThemedButton>

        <ThemedText>
          <Link style={[styles.link]} href={"/register"}>
            Register instead
          </Link>
        </ThemedText>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

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
