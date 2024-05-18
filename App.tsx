import { ThemeProvider } from "@shopify/restyle";
import Button from "@/components/shared/button";
import { StatusBar } from "expo-status-bar";
import Navigation from "@/navigation";
import { StyleSheet, View } from "react-native";
import theme, { Text } from "@/utils/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useUserGlobalStore from "@/store/useUserGlobalStore";

export default function App() {
  const { user, updateUser } = useUserGlobalStore();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
