import { ThemeProvider } from "@shopify/restyle";
import Button from "@/components/shared/button";
import { StatusBar } from "expo-status-bar";
import Navigation from "@/navigation";
import { StyleSheet, View } from "react-native";
import theme, { Text } from "@/utils/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
