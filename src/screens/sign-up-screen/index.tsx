import { Box, Text } from "@/utils/theme";
import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import { registerUser } from "@/service/api";
import { IUser } from "@/types";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  const onSubmit = async (data: IUser) => {
    try {
      const { email, name, password } = data;
      /**
       * register user
       */
      await registerUser({
        email,
        name,
        password,
      });
      navigateToSignInScreen();
    } catch (error) {}
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in Screen</Text>
        <Button title="Navigate to sign in" onPress={navigateToSignInScreen} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
