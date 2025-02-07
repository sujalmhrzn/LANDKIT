import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

const Navbar: React.FC = () => {
  return (
    <Box m="auto">
      <Flex justifyContent={"space-between"}>
        <Button color="blue" variant={"text"}>
          Landkit.
        </Button>
        <ButtonGroup>
          <Button variant={"text"}>Landings</Button>
          <Button variant={"text"}>Pages</Button>
          <Button variant={"text"}>Account</Button>
          <Button variant={"text"}>Documentation</Button>
          <Button
            bg="blue.600"
            _hover={{
              bg: "#1e40af",
              boxShadow: "0px 4px 8px rgba(22, 28, 45, 0.2)",
              transform: "translateY(-3px)",
              transition: "box-shadow 0.25s ease, transform 0.25s ease",
            }}
          >
            <Link to="/buy">Buy now</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
export default Navbar;
