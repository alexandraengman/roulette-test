import React from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

import MainStackNavigator from "./src/navigation/MainStackNavigator";

export default function App() {
  // NB: React-native-gesture-handler is embedded in @react-navigation/stack, warning ignored as library owners need to update
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <>
      <StatusBar style="auto" />
      <MainStackNavigator />
    </>
  );
}
