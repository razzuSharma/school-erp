import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "@gluestack-ui/themed";
import { InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";

const AuthScreen = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Login:", email, password);
  };

  const handleSignUp = () => {
    // Add your signup logic here
    console.log("Sign up:", email, password);
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
            <Text className="text-white">Login</Text>
          </Button>

          <Button
            variant="outline"
            size="md"
            className="w-full"
            action="secondary"
            onPress={handleSignUp}
          >
            <Text>Sign Up</Text>
          </Button>
        </View>
      </View>
    </Box>
  );
};

export default AuthScreen;
