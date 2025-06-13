import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { userContext } from "../contexts/UserContext";

const useUser = () => {
  const context = useContext(userContext);

  if (!context) throw new Error("SHould be within the context wrapper");

  return context;
};

export default useUser;
