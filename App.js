import React from "react";
import { Platform, StatusBar } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";

const isAndroid = Platform.OS === "android";
const barStyle = isAndroid ? "light-content" : "dark-content";

const App = () => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <AppNavigation />
    </>
  );
};

export default App;
