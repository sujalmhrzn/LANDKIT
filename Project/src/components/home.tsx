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
    <Box>
      <HStack spacing>
        <Box>
          <Heading as="h1">Welcome to Landkit. Develop anything.</Heading>
          <Text>
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
              bg="#506690"
              _hover={{
                boxShadow: "0px 4px 8px rgba(22, 28, 45, 0.2)",
                transform: "translateY(-3px)",
              }}
            >
              Documentation
            </Button>
          </ButtonGroup>
        </Box>
        <Image src={image1} alt="My Image" boxSize="400px" />
      </HStack>
    </Box>
  );
};

export default hero;
