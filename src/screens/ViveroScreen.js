import React from "react";
import { View, Image, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Vivero = () => {
  const navigation = useNavigation();

  const handleButton1Press = (viveroName) => {
    // Lógica para el botón 1
    console.log("Button 1 pressed for vivero:", viveroName);
    navigation.navigate("RiegoScreen", { viveroName }); // Pasar el nombre del vivero como parámetro
  };

  const handleButton2Press = () => {
    // Lógica para el botón 2
    console.log("Button 2 pressed");
    navigation.navigate("EstadisticaScreen"); // Navegar a EstadisticaScreen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.viveroText}>VIVERO 1</Text>
        <Image source={require("../assets1/estadisticas1.png")} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleButton1Press("VIVERO 1")} style={[styles.button, { marginRight: 10 }]}>
            <Text>Riego</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButton2Press} style={styles.button}>
            <Text>Estadisticas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.viveroText}>VIVERO 2</Text>
        <Image source={require("../assets1/estadisticas1.png")} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleButton1Press("VIVERO 2")} style={[styles.button, { marginRight: 10 }]}>
            <Text>Riego</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButton2Press} style={styles.button}>
            <Text>Estadisticas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.viveroText}>VIVERO 3</Text>
        <Image source={require("../assets1/estadisticas1.png")} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleButton1Press("VIVERO 3")} style={[styles.button, { marginRight: 10 }]}>
            <Text>Riego</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButton2Press} style={styles.button}>
            <Text>Estadisticas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.viveroText}>VIVERO 4</Text>
        <Image source={require("../assets1/estadisticas1.png")} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleButton1Press("VIVERO 4")} style={[styles.button, { marginRight: 10 }]}>
            <Text>Riego</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButton2Press} style={styles.button}>
            <Text>Estadisticas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 10,
  },
  image: {
    width: "70%",
    height: 200,
  },
  viveroText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default Vivero;
