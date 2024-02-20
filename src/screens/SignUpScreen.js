import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";

import { authentication } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const { setLoggedInUser } = useAuth();

  const handleSignUp = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log(res.user);
        setLoggedInUser(res.user);
      })
      .catch((re) => {
        console.log(re);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets1/logoapp.png")} // Ruta de tu imagen local
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#ffffff" // Color del texto del marcador de posición
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
        color="#ffffff" // Color del texto ingresado
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        color="#ffffff" // Color del texto ingresado
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#ffffff"
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        color="#ffffff" // Color del texto ingresado
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    color: "#ffffff", // Color del texto ingresado
  },
  button: {
    backgroundColor: "green",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUpScreen;
