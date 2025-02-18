import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Photo2 from "../assets/photo-2.jpg";
import { ReactTyped, Typed } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <FontAwesomeIcon icon={faCircleCheck} width="22px" height="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Contact = () => {
  return (
    <Box maxW="6xl" p={0} m="auto">
      <Flex py={20} >
        <VStack w="40%" h="full" p={10} spacing={10} alignItems="flex-start">
          <Box shadow="md" rounded="md" w="full" overflow="hidden">
            <Box w="full">
              <Image src={Photo2} objectFit="cover" w="full" h="full" />
            </Box>

            <Box p={5} w="full">
              <SimpleGrid columns={1} spacing={4}>
                <GridItem colSpan={1}>
                  <FormControl>
                    <Input placeholder="Name" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl>
                    <Input placeholder="Email" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl>
                    <Input placeholder="Password" />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <Button size="lg" w="full">
                    Download a sample
                  </Button>
                </GridItem>
              </SimpleGrid>
            </Box>
          </Box>
        </VStack>

        <VStack
          w="60%"
          p={10}
          spacing={4}
          alignItems="flex-center"
          bg=""
          h='350px'
          mt='120px'
        >
          <Text fontSize={25}>The most useful resource</Text>
          <Text fontSize={25}>
            ever created for&nbsp;
            <Text as="span" color="blue.400">
              <ReactTyped
                strings={["designers.", "developers.", "founders."]}
                typeSpeed={100} // Typing speed
                backSpeed={50} // Backspacing speed
                loop
              />
            </Text>
          </Text>

          <Text fontSize={18} mb='15px'>
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </Text>
          <SimpleGrid columns={2}>
            <GridItem colSpan={1}>
              <ListItem>Lifetime updates</ListItem>
            </GridItem>
            <GridItem colSpan={1}>
              <ListItem>Tech support</ListItem>
            </GridItem>
            <GridItem colSpan={1}>
              <ListItem>Tons of assets</ListItem>
            </GridItem>
            <GridItem colSpan={1}>
              <ListItem>Integration ready</ListItem>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
