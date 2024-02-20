import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const RiegoScreen = () => {
  // Obtener el nombre del vivero del parámetro de la ruta
  const route = useRoute();
  const { viveroName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{viveroName}</Text>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.description}>259 litros</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets1/automatico.png")}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.additionalContainer}>
          <Image
            source={require("../assets1/medidordeagua.png")}
            style={styles.additionalImage}
          />
          <Text style={styles.additionalText}>Historial</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Litro</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Tiempo</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Riego</Text>
          </View>
        </View>
        {/* Nuevas columnas para ingresar información */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>15 litros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>10 min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Regado</Text>
          </TouchableOpacity>
          {/* Agregar más columnas aquí */}
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>20 litros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>15 min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>No Regado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>30 litros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>20 min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Regado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>25 litros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>15 min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>No Regado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>40 litros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>25 min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Regado</Text>
          </TouchableOpacity>
          {/* Agregar tantas columnas como desees */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20, // Agrega un margen horizontal
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: "row", // Alinea los elementos en fila
    alignItems: "center",
    marginTop: 20, // Agrega un margen superior al contenedor de contenido
    borderWidth: 1, // Agrega un borde al contenedor
    borderColor: "#ccc", // Color del borde
    borderRadius: 5, // Borde redondeado
    padding: 10, // Espaciado interno
  },
  imageContainer: {
    alignItems: "flex-end", // Alinea la imagen a la derecha
    marginRight: 20, // Agrega margen a la derecha del contenedor de la imagen
  },
  textContainer: {
    flex: 1, // Toma todo el espacio disponible
    alignItems: "flex-start", // Alinea el texto a la izquierda
    marginLeft: 20, // Agrega margen a la izquierda del contenedor del texto
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  description: {
    fontSize: 22,
    textAlign: "center",
  },
  additionalContainer: {
    flexDirection: "row", // Alinea la imagen y el texto en fila
    alignItems: "center", // Alinea verticalmente en el centro
    marginTop: 20,
  },
  additionalImage: {
    width: 50, // Tamaño más pequeño para la imagen adicional
    height: 50,
    marginRight: 10, // Espacio entre la imagen adicional y el texto
  },
  additionalText: {
    fontSize: 18,
  },
  infoContainer: {
    flexDirection: "row", // Alinea los elementos en fila
    marginTop: 20,
    justifyContent: "space-between", // Distribuye el espacio entre los elementos
  },
  infoBox: {
    backgroundColor: "#4C864A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Permite que las columnas se envuelvan a la siguiente línea
  },
  input: {
    flexBasis: "30%", // Ajusta el ancho de las columnas
    backgroundColor: "#4C864A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10, // Espacio entre las columnas
  },
  inputText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default RiegoScreen;
