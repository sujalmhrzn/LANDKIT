import React from "react";
import {
  Box,
  Flex,
  AbsoluteCenter,
  Center,
  Circle,
  Square,
  Text,
  Button,
  ButtonGroup,
  Stack,
  Heading,
  Image,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

import image1 from "../assets/img11.png";

const hero = () => {
  return (
    <Box maxW="1024px" mx="auto" mt={10}>
      <Center>
        <Box>
          <Heading as="h1">Welcome to Landkit. Develop anything.</Heading>
          <Text fontSize="lg" color="gray.500" mt={2}>
            Build a beautiful, modern website with flexible Bootstrap components
            built from scratch.
          </Text>
          <ButtonGroup>
            <Button
              bg="blue.600"
              _hover={{
                bg: "#1e40af",
                boxShadow: "0px 4px 8px rgba(22, 28, 45, 0.2)",
                transform: "translateY(-3px)",
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
            >
              View all Pages
            </Button>
            <Button
              bg="#E5E7EB"
              color="#335EEA"
              _hover={{
                bg: "#D1D5DB",
                boxShadow: "0px 4px 8px rgba(229, 231, 235, 0.3)",
                transform: "translateY(-3px)",
              }}
            >
              Documentation
            </Button>
          </ButtonGroup>
        </Box>
        <Image src={image1} alt="My Image" boxSize="400px" />
      </Center>
    </Box>
  );
};

export default hero;
