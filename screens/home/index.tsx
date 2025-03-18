import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

export default () => {
  const insets = useSafeAreaInsets();

  return (
    <Box className="flex-1 bg-blue-700" style={{ paddingTop: insets.top }}>
      <Box
        className={`
          flex-1 
          bg-blue-700 
          p-5
        `}
        style={{
          backgroundImage: "linear-gradient(to bottom, #1e40af, #1e3a8a)",
        }}
      >
        <VStack space="xl">
          <HStack className="justify-between items-center mt-3">
            <Text className="text-3xl font-bold text-white tracking-wide">
              Welcome Back
            </Text>
          </HStack>

          <Box
            className={`
            bg-white/95
            p-6
            rounded-2xl
            shadow-lg
            shadow-black/10
          `}
          >
            <Text className="text-xl font-semibold text-blue-700">
              Your Dashboard
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
