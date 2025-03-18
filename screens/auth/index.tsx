import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "@gluestack-ui/themed";
import { InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";
const AuthScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", email, password);
    // route.push('/')
  };

  const handleSignUp = () => {
    console.log("Sign up:", email, password);
    navigation.navigate("Register" as never);
  };

  return (
    <Box className="flex-1 bg-blue-700" style={{ paddingTop: insets.top }}>
      <View className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <View className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
          <Text className="text-center text-3xl font-semibold mb-6">
            Hello there
          </Text>

          <Input variant="outline" size="md" className="mb-4">
            <InputField
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
          </Input>

          <Input variant="outline" size="md" className="mb-6">
            <InputField
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Input>

          <Button
            variant="solid"
            size="md"
            className="w-full mb-4"
            action="primary"
            onPress={handleLogin}
          >
            <ButtonText className="text-white">Login</ButtonText>
          </Button>

          <Button
            variant="outline"
            size="md"
            className="w-full"
            action="secondary"
            onPress={handleSignUp}
          >
            <ButtonText>Sign Up</ButtonText>
          </Button>
        </View>
      </View>
    </Box>
  );
};

export default AuthScreen;
