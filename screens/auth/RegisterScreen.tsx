import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = () => {
    // TODO: Implement registration logic
    console.log('Register:', { email, password })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box className="flex-1 justify-center px-4">
        <VStack className="space-y-4">
          <Text className="text-2xl font-bold text-center mb-4">
            Create Account
          </Text>

          <Input className="mb-2" variant="outline" size="lg">
            <InputField
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Input>

          <Input className="mb-2" variant="outline" size="lg">
            <InputField
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Input>

          <Input className="mb-4" variant="outline" size="lg">
            <InputField
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </Input>

          <Button 
            className="w-full"
            size="lg" 
            variant="solid"
            onPress={handleRegister}
          >
            <ButtonText>Sign Up</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeAreaView>
  )
}

export default RegisterScreen