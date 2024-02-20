import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ViveroScreen from "../screens/ViveroScreen";
import RiegoScreen from "../screens/RiegoScreen";
import EstadisticaScreen from "../screens/EstadisticaScreen";
import WelcomeScreen from "../screens/WelcomeScreen"; // Import the WelcomeScreen

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"  // Set the screen name to "Welcome"
        component={WelcomeScreen}  // Set the component to WelcomeScreen
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Vivero"
        component={ViveroScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="RiegoScreen"
        component={RiegoScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="EstadisticaScreen"
        component={EstadisticaScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
