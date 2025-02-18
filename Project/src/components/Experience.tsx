import { Box, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Dashkit from '../assets/dashkit.jpg'
import Loop from '../icons/Loop'
import Code from '../icons/Code'

const Experience = () => {
  return (
    <Box ml='200px' pl='100px' my='50px' py='50px'>
      <HStack mx="auto" overflow="hidden" borderRadius='lg' height='600px'>
        <Flex direction='row' maxW='1300px' justifyContent='start' alignItems='start' mx='auto'>
          <Flex direction='column' mr='50px' pr='50px'>
            <Text fontSize='25px' py='5px' fontWeight='semibold'>We have lots of experience</Text>
            <Text fontSize='25px' pb='20px' fontWeight='semibold'>building Bootstrap themes.</Text>
            <Text as='p' fontSize='20px' pb='20px' mb='20px'>We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.</Text>
            <HStack>
              <Loop />
              <Stack direction='column' mb='25px' ml='20px'>
                <Text fontWeight='semibold'>Bootstrap users since the begining</Text>
                <Text>We've been developing with Boostrap since it was publicly released in 2011.</Text>
              </Stack>
            </HStack>
            <HStack>
              <Code />
              <Stack direction='column' ml='20px'>
                <Text fontWeight='semibold'>Deep understanding of Bootstrap</Text>
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