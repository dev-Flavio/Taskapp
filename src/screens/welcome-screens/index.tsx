import { Box, Text } from "@/utils/theme";
import React from "react";
import { AuthScreenNavigationType } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Welcome Screen</Text>
        <Button title="Navigator to sign in" onPress={navigateToSignInScreen} />
        <Button title="Navigator to sign up" onPress={navigateToSignUpScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
