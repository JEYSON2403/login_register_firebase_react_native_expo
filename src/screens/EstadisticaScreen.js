import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const EstadisticaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Estadísticas</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets1/planta.png")} style={styles.image} />
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: 30 }]} />
          <Text>Ene</Text>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: 50 }]} />
          <Text>Feb</Text>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: 20 }]} />
          <Text>Mar</Text>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: 40 }]} />
          <Text>Abr</Text>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: 60 }]} />
          <Text>May</Text>
        </View>
        <View style={styles.barContainer}>
          <View style={[styles.bar, { height: 70 }]} />
          <Text>Jun</Text>
        </View>
      </View>
      {/* Rectángulos con las estadísticas */}
      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangle}>
          <Text>215 litros                                            enero</Text>
        </View>
        <View style={styles.rectangle}>
          <Text>120 litros                                            marzo</Text>
        </View>
        <View style={styles.rectangle}>
          <Text>50 litros                                                 abril</Text>
        </View>
        <View style={styles.rectangle}>
          <Text>100 litros                                            mayo</Text>
        </View>
        <View style={styles.rectangle}>
          <Text>80 litros                                                junio</Text>
        </View>
        <View style={styles.rectangle}>
          <Text>150 litros                                              julio</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Alinea los elementos en la parte superior
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 20, // Agrega un margen superior a la imagen
  },
  image: {
    width: 150, // Ajusta el tamaño de la imagen
    height: 150,
    resizeMode: "contain", // Ajusta la imagen al tamaño del contenedor
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  barContainer: {
    alignItems: "center",
  },
  bar: {
    backgroundColor: "blue",
    width: 30, // Ancho fijo para todas las barras
    marginBottom: 5,
  },
  rectanglesContainer: {
    flexDirection: "column", // Cambia a disposición vertical
    alignItems: "center",
    marginTop: 10,
    flex: 1, // Asegura que ocupe todo el espacio disponible
    paddingHorizontal: 20, // Agrega un padding horizontal
  },
  rectangle: {
    backgroundColor: "lightblue",
    paddingVertical: 10, // Ajusta el padding vertical
    paddingHorizontal: 20, // Ajusta el padding horizontal
    borderRadius: 5,
    marginBottom: 10, // Espacio entre rectángulos
    width: "200%", // Ancho del rectángulo
    alignItems: "center",
  },
});

export default EstadisticaScreen;
