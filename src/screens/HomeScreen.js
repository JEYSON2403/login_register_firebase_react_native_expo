import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleRiegoPress = () => {
    // Redirigir a la pantalla de Vivero
    navigation.navigate("Vivero");
  };

  const handleControlAguaPress = () => {
    // Redirigir a la pantalla de estadísticas (EstadisticaScreen)
    navigation.navigate("EstadisticaScreen");
  };

  const handleLogout = () => {
    // Redirigir a la pantalla de inicio de sesión (WelcomeScreen)
    navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Image source={require("../assets1/salida.png")} style={styles.logoutButtonImage} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={require("../assets1/curva.png")} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleRiegoPress} style={styles.button}>
          <Text style={styles.buttonText}>Viveros</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleControlAguaPress} style={styles.button}>
          <Text style={styles.buttonText}>Estadisticas</Text>
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
  },
  logoutButton: {
    position: "absolute",
    top: 30,
    right: 20,
    padding: 15, // Aumenta el tamaño del padding para hacer el botón más grande
  },
  logoutButtonImage: {
    width: 32, // Ajusta el tamaño de la imagen según sea necesario
    height: 32,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    marginBottom: 40, // Aumenta el margen inferior para mover los botones hacia abajo
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 15, // Aumenta el tamaño del padding para hacer el botón más grande
    marginVertical: 10,
    width: "78%",
    height: 60, // Ajusta la altura del botón según sea necesario
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default HomeScreen;
