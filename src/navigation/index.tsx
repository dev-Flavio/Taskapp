import React, { useEffect } from "react";
import AppStackNavigator from "./app-stack-navigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth-stack-navigation";
import useUserGlobalStore from "@/store/useUserGlobalStore";

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore();

  useEffect(() => {
    null;
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
