import React from "react";
import AppStackNavigator from "./app-stack-navigator";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const user = true;

  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
