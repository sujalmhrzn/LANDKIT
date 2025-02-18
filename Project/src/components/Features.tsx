import React from "react";
import { Box, Flex, Icon, Text, VStack, HStack } from "@chakra-ui/react";
import { FaServer, FaThLarge, FaCode } from "react-icons/fa";

const Feature = () => {
  return (
    <Box maxW="1024px" mx="auto" py={16} textAlign="center">
      <Flex justify="space-around" wrap="wrap" gap={8}>
        {/* Feature 1 */}
        <VStack maxW="300px">
          <Box>
            <Icon as={FaServer} boxSize={10} color="blue.600" />
          </Box>
          <Text fontSize="xl" fontWeight="bold">
            Built for developers
          </Text>
          <Text fontSize="md" color="gray.500">
            Landkit is built to make your life easier. Variables, build tooling,
            documentation, and reusable components.
          </Text>
        </VStack>

        {/* Feature 2 */}
        <VStack maxW="300px">
          <Icon as={FaThLarge} boxSize={10} color="blue.600" />
          <Text fontSize="xl" fontWeight="bold">
            Designed to be modern
          </Text>
          <Text fontSize="md" color="gray.500">
            Designed with the latest design trends in mind. Landkit feels
            modern, minimal, and beautiful.
          </Text>
        </VStack>

        {/* Feature 3 */}
        <VStack maxW="300px">
          <Icon as={FaCode} boxSize={10} color="blue.600" />
          <Text fontSize="xl" fontWeight="bold">
            Documentation for everything
          </Text>
          <Text fontSize="md" color="gray.500">
            We've written extensive documentation for components and tools, so
            you never have to reverse engineer anything.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Feature;
