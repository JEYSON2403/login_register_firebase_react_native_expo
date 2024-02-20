import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ViveroScreen from "../screens/ViveroScreen";
import RiegoScreen from "../screens/RiegoScreen"; // Importa la pantalla RiegoScreen

const Stack = createNativeStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Vivero"
        component={ViveroScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Riego" // Define la pantalla RiegoScreen
        component={RiegoScreen} // Asigna el componente de la nueva pantalla
        options={{ headerShown: true }} // Define las opciones de navegación
      />
    </Stack.Navigator>
  );
};

export default GuestStack;
