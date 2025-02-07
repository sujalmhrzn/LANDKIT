import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Illustration from '../assets/illustration-8.png'

const Summary = () => {
  return (
    <Box mt='50px' pt='80px'>
      <Box mx="auto" overflow="hidden" borderRadius='lg' maxW='1300px'>
        <Flex>  
            <Flex direction='column' mr='50px' pr='50px'>
                <Heading as='h2' fontSize='30px' py='20px'>Stay focused on your business.</Heading>
                <Heading as='h2' fontSize='30px' pb='20px'>Let us handle the design.</Heading>
                <Text as='p' fontSize='20px'>You have a business to run. Stop worrying about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you.</Text>
            </Flex>
            <img src={Illustration} width="50%" />
        </Flex>
      </Box>
        
    </Box>
  )
}

export default Summary