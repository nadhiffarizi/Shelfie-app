import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import useUser from "../../hooks/useUser";

const Register = () => {
  // global state
  const { register } = useUser();

  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = async () => {
    try {
      await register(email, password);
    } catch (error) {}
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true}>Register an Account</ThemedText>

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
        <Spacer height={20} />

        <ThemedButton onPress={async () => await handleSubmit()}>
          <Text style={{ color: "#f2f2f2", fontSize: 20, fontWeight: "600" }}>
            Register
          </Text>
        </ThemedButton>

        <ThemedText>
          <Link style={[styles.link]} href={"/login"}>
            Login here
          </Link>
        </ThemedText>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
