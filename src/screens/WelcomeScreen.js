import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Contenedor para la imagen */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets1/logoapp.png")} // Ruta de tu imagen
          style={styles.logo}
        />
      </View>

      {/* Contenedor para los botones */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  imageContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ffffff",
    width: "90%",
    paddingVertical: 10, // Aumentar el padding vertical para hacer los botones más grandes
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "green",
    fontSize: 20, // Aumentar el tamaño del texto del botón
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WelcomeScreen;
