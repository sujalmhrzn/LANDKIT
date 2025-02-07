import { Box, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Dashkit from '../assets/dashkit.jpg'
import Loop from '../icons/Loop'
import Code from '../icons/Code'

const Experience = () => {
  return (
    <Box ml='100px' pl='100px' my='100px' py='100px'>
      <HStack mx="auto" overflow="hidden" borderRadius='lg' height='600px'>
        <Flex direction='row' maxW='1300px' justifyContent='start' alignItems='start' mx='auto'>
          <Flex direction='column' mr='50px' pr='50px'>
            <Heading as='h2' fontSize='30px' py='20px'>We have lots of experience</Heading>
            <Heading as='h2' fontSize='30px' pb='20px'>building Bootstrap themes.</Heading>
            <Text as='p' fontSize='20px' pb='20px' mb='20px'>We've built well over a dozen Bootstrap themes and sold tens fo thousands of copies.</Text>
            <HStack>
              <Loop />
              <Stack direction='column' mb='20px' ml='20px'>
                <Heading>Bootstrap users since the begining</Heading>
                <Text>We've been developing with Boostrap since it was publicly released in 2011.</Text>
              </Stack>
            </HStack>
            <HStack>
              <Code />
              <Stack direction='column' ml='20px'>
                <Heading>Deep understanding of Bootstrap</Heading>
                <Text>We've watched Bootstrap grow up over the years and understand it better than almost anyone.</Text>
              </Stack>
            </HStack>
          </Flex>
        </Flex>
        <Image src={Dashkit} width="50%" boxShadow='lg' />
        
      </HStack>
      
    </Box>
  )
}

export default Experience